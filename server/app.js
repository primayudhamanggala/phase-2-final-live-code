const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');

let dbURI         = 'mongodb://localhost/final-live-code'

mongoose.connect(dbURI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


let author = require('./routes/author')
let article = require('./routes/article')

app.use('/authors', author)
app.use('/articles', article)


app.listen(process.env.PORT || 3000)
