const express = require('express')
const systemController = require('../controllers/systemController')
const router = express.Router()

router.route('/').get(systemController.getAllSystems)
router.route('/').post(systemController.setSystem)
router.route('/:id').get(systemController.getSystem)
router.route('/:id').put(systemController.updateSystem)
router.route('/:id').delete(systemController.deleteSystem)


module.exports = router