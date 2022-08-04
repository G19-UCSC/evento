const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/').post(userController.setUser);
router.route('/:id').get(userController.getUser);

module.exports = router;