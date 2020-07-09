
const router = require('express').Router();
const controller = require('../../controllers/api/profile');


router.get('/',controller.getAllProfile)
router.get('/:id',controller.getExactProfile)

module.exports = router;

