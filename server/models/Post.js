const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  _id: {
    type: _id,
    required: true,
    unique: true,
  },
  title: [
    {
      type: String,
      required: true,
    },
  ],
  topic: [
  {
    type: String,
    required: true,
  },
  ],
  content: [
    {
      type: String,
      required: true,
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;