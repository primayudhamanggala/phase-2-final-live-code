const dbAuthor = require('../models/author')


module.exports = {
  create: (req, res) => {
    dbAuthor.create(req.body, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(author)
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
