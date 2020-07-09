const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/profile',require('./profile'))
router.use('/posts',require('./posts'))



module.exports = router;
