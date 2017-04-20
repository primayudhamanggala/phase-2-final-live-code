const mongoose = require('mongoose');
const Schema = mongoose.Schema

let authorSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
})

let Author = mongoose.model('Author', authorSchema)

module.exports = Author;
