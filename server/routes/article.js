const express = require('express');
const router = express.Router()
const articleController = require('../controllers/article')


router.post('/', articleController.create)

router.get('/', articleController.getAll)

router.put('/:id', articleController.update)

router.delete('/:id', articleController.delete)



module.exports = router;
