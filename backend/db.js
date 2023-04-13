const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/Assignment'

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;