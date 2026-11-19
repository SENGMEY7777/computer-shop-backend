const express = require('express');
const router = express.Router();
const review.Controller = require('../controllers/review.Controller');

router.get('/', review.Controller.getAll);
router.get('/:id', review.Controller.getById);
router.post('/', review.Controller.create);
router.put('/:id', review.Controller.update);
router.delete('/:id', review.Controller.delete);

module.exports = router;
