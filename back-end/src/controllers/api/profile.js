const createController = require('../createController');
const User = require('../../models/User');

module.exports = {
  getExactProfile:createController(
    async(req,res)=>{
      
      const user = await User.findOne({ _id: req.params.id })
      res.send(user)
    }
  ),
  getAllProfile: createController(
    async(req,res)=>{
      let user_id = req.body.user_id
      const users = await User.find();
      res.send(users)
    }
  )

};
