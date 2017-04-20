const mongoose = require('mongoose');
const Schema = mongoose.Schema

let articleSchema = new Schema({
  title: String,
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article;
