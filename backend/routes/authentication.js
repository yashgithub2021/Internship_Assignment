const express = require('express')
const moment = require('moment');
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/getUser')
const TOKEN = 'validator';

//Create User
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    body('dob', 'Enter a valid Date of Birth')
], async (req, res) => {
    const errors = validationResult(req);
    let checkUser = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            checkUser = true;
            return res.status(400).json({ checkUser, error: 'Email Already Exist!' })

        }
        const { dob } = req.body;
        const formattedDob = moment(dob, 'YYYY-MM-DD', true); // Parse date in 'dd-mm-yyyy' format
        if (!formattedDob.isValid()) {
            throw new Error('Invalid Date of Birth. Please provide the date in the format dd-mm-yyyy.');
        }

        // Convert date to 'yyyy-mm-dd' format for MongoDB storage
        const dobForDb = formattedDob.format('YYYY-MM-DD');
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            dob: dobForDb,
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const jwtData = jwt.sign(data, TOKEN)
        success = true
        res.json({ success, jwtData, data })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected Error Occured")
    }
})


//Login User
router.post('/login', [
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password Cannot be Empty').exists()
], async (req, res) => {
    const errors = validationResult(req);

    let cred = false
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body
    try {

        let user = await User.findOne({ email })
        if (!user) {
            cred = true
            return res.status(400).json({ cred, error: 'Wrong Credentials' })
        }

        const comparePass = await User.findOne({ password }) //bcrypt.compare(password, user.password)
        if (!comparePass) {
            cred = true
            return res.status(400).json({ cred, error: 'Wrong Credentials' })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const jwtData = jwt.sign(data, TOKEN)
        success = true
        res.json({ success, jwtData })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected Error Occured")
    }
})


//Update User Details
router.put('/update/:id', fetchUser, [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password Cannot be Empty').isLength({ min: 5 })
], async (req, res) => {

    try {
        const { name, password } = req.body
        const upadtedUser = {}
        if (name) {
            upadtedUser.name = name
        }
        if (password) {
            upadtedUser.password = password
        }

        let updated = await User.findById(req.params.id)
        if (!updated) {
            res.status(404).send('Not Found')
        }

        updated = await User.findByIdAndUpdate(req.params.id, { $set: upadtedUser }, { new: true })
        res.json({ updated })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected Error Occured")
    }
})

//Get User
router.get('/getUser', fetchUser, async (req, res) => {
    try {
        let userId = req.user.id
        const user = await User.findById(userId);
        let addId = req.user.id
        const address = await Address.find({ user: addId })
        res.json({ user, address })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("An Unexpected Error Occured");
    }
})

module.exports = router