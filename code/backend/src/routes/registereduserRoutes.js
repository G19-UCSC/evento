const express = require('express');
const registereduserController = require('../controllers/registereduserController');
const router = express.Router();

router.route('/').get(registereduserController.getAllUsers);
router.route('/').post(registereduserController.setUser);
router.route('/:id').get(registereduserController.getUser);
router.route('/:id').put(registereduserController.updateUser);
router.route('/:id').delete(registereduserController.deleteUser);

module.exports = router;