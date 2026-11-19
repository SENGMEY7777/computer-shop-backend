const express = require('express');
const router = express.Router();
const cart.Controller = require('../controllers/cart.Controller');

router.get('/', cart.Controller.getAll);
router.get('/:id', cart.Controller.getById);
router.post('/', cart.Controller.create);
router.put('/:id', cart.Controller.update);
router.delete('/:id', cart.Controller.delete);

module.exports = router;
