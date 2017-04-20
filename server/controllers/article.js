const dbArticle = require('../models/article')


module.exports = {
  create: (req, res) => {
    dbArticle.create(req.body, (err, article) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(article)
      }
    })
  },
  getAll: (req, res) => {
    dbArticle.find({}, (err, article) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(article)
      }
    })
  },
  update: (req, res) => {
    dbArticle.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(article)
      }
    })
  },
  delete: (req, res) => {
    dbArticle.findByIdAndRemove(req.params.id, (err, article) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(article)
      }
    })
  }
}
