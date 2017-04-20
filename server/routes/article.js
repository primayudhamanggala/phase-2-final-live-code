const express = require('express');
const router = express.Router()
const articleController = require('../controllers/article')
const verifier = require('../helpers/jwt')


router.post('/', verifier, articleController.create)

router.get('/', articleController.getAll)

router.put('/:id', verifier, articleController.update)

router.delete('/:id', articleController.delete)



module.exports = router;
