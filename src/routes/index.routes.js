const express = require('express');
const router = express.Router();
const index.Controller = require('../controllers/index.Controller');

router.get('/', index.Controller.getAll);
router.get('/:id', index.Controller.getById);
router.post('/', index.Controller.create);
router.put('/:id', index.Controller.update);
router.delete('/:id', index.Controller.delete);

module.exports = router;
