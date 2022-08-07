const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  _id: {
    type: _id,
    required: true,
    unique: true,
  },
  snipet: [
    {
      type: String,
    },
  ],
});

const Profile = model('Post', postSchema);

module.exports = Post;