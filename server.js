const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}.`)
})

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})