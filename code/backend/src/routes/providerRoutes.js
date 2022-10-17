const express = require('express');
const providerController = require('../controllers/providerController');
const router = express.Router();

router.route('/').get(providerController.getAllProviders);
router.route('/').post(providerController.setProvider);
router.route('/:userid').get(providerController.getProvider);
router.route('/:userid').put(providerController.updateProvider);
router.route('/:userid').delete(providerController.deleteProvider);

module.exports = router;