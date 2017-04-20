const mongoose = require('mongoose');
const Schema = mongoose.Schema

let articleSchema = new Schema({
  title: String,
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  createdAt: Date,
  updatedAt: Date,
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article;
