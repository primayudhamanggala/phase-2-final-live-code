const express = require('express');
const router = express.Router()
const authorController = require('../controllers/author')
const verifier = require('../helpers/jwt')

router.post('/signup', authorController.create)

router.post('/signin', authorController.login)

router.get('/', verifier, authorController.getAll)

router.put('/:id', verifier, authorController.update)

router.delete('/:id', verifier, authorController.delete)



module.exports = router;
