const dbArticle = require('../models/article')
const dbAuthor = require('../models/author')


module.exports = {
  create: (req, res) => {
    dbAuthor.findById(req.decoded.id, (err, author) => {
      if (err) {
        res.send(err.message)
      } else {
        if (req.decoded.username === author.username) {
          req.body.author = author.id
          dbArticle.create(req.body, (err, article) => {
            if (err) {
              res.send(err.message)
            } else {
              res.send(article)
            }
          })
        } else {
          res.send('You are not authorized to do it')
        }
      }
    })
  },
  getAll: (req, res) => {
    dbArticle.find().populate('author').exec((err, article) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(article)
      }
    })
  },
  update: (req, res) => {
    // console.log(req.decoded.id === req.body.author._id);
    // dbAuthor.findById(req.decoded.id, (err, author) => {
    //   if (err) {
    //     res.send(err.message)
    //   } else {
    //     if (req.decoded.id === req.body.author._id) {
    //       dbArticle.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
    //         if (err) {
    //           res.send(err.message)
    //         } else {
    //           res.send(article)
    //         }
    //       })
    //     } else {
    //       res.send('You are not authorized to do that')
    //     }
    //   }
    // })
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
