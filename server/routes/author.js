const express = require('express');
const router = express.Router()
const authorController = require('../controllers/author')


router.post('/', authorController.create)

router.get('/', authorController.getAll)

router.put('/:id', authorController.update)

router.delete('/:id', authorController.delete)



module.exports = router;
