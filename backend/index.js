const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.port || 4000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/authentication'))

app.listen(port, () => {
    console.log(`Backend is running on port: ${port}`)
})

