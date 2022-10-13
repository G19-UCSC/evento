const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/').post(userController.setUser);
router.route('/:userid').get(userController.getUser);
router.route('/:userid').put(userController.updateUser);
router.route('/:userid').delete(userController.deleteUser);

module.exports = router;