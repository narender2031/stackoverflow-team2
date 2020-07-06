const router = require('express').Router();
const controller = require('../../controllers/api/users');

router.post('/usersExceptMe',controller.getAllUsersExceptMe);
router.post('/login', controller.login);
router.post('/register', controller.register);


module.exports = router;