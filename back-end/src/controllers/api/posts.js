const createController = require('../createController');
const User = require('../../models/User');
const Post = require('../../models/Post')


module.exports = {
  setPosts : createController(
    async(req,res)=>{
      console.log(req.body);
      const newPost = new Post(req.body)
      newPost.save()
      res.status(200).send("pppp")
    }
  ),
  getExactPost:createController(
    async(req,res)=>{
        const post = await Post.findOne({ _id: req.params.post_id })
        res.send(post)
    }
  ),
  getPosts : createController(   
    async(req,res)=>{

      const posts = await Post.find();
      res.send(posts)
    }
  ),
  getExactUserPost:createController(
      async(req,res)=>{
        const posts = await Post.find({ user_id: req.params.user_id });
        res.send(posts)
      }
  )

};
