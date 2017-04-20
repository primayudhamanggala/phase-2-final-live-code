const dbAuthor = require('../models/author')
const jwt = require('jsonwebtoken')
const passwordHash = require('password-hash')
require('dotenv').config()

module.exports = {
  create: (req, res) => {
    req.body.password = passwordHash.generate(req.body.password)
    dbAuthor.create(req.body, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(author)
      }
    })
  },
  login: (req, res) => {
    dbAuthor.findOne({username: req.body.username}, (err, author) => {
      if (passwordHash.verify(req.body.password, author.password)) {
        let token = jwt.sign({
          id: author._id,
          name: author.name,
          username: author.username,
          email: author.email
        }, process.env.SECRET_KEY)
        res.send(token)
      } else {
        res.send(`Username or Password doesn't exists`)
      }
    })
  },
  getAll: (req, res) => {
    dbAuthor.find({}, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(author)
      }
    })
  },
  update: (req, res) => {
    dbAuthor.findByIdAndUpdate(req.params.id, req.body, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(author)
      }
    })
  },
  delete: (req, res) => {
    dbAuthor.findByIdAndRemove(req.params.id, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(author)
      }
    })
  }
}
