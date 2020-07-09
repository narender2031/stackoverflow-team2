const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    user_text:{
        type : String,
        required :true
    },
    user_heading:{
        type : String,
        required :true
    },

  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Post', PostSchema);
