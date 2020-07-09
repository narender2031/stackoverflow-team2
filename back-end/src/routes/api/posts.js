const router = require('express').Router();
const controller = require('../../controllers/api/posts');


router.post('/add_post',controller.setPosts)
router.get('/',controller.getPosts)
router.get('/:user_id',controller.getExactUserPost)
router.get('/:post_id',controller.getExactPost)

module.exports = router;



