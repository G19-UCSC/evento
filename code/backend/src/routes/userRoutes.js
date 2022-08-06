const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/').post(userController.setUser);
router.route('/:id').get(userController.getUser);
router.route('/:id').put(userController.updateUser);
router.route('/:id').delete(userController.deleteUser);

module.exports = router;