const jwt = require('jsonwebtoken')
const TOKEN = 'validator'

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send('Not Authorized!')
    }

    try {
        const data = jwt.verify(token, TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send('Not Authorized!')
    }
}

module.exports = fetchUser