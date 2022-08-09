const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const postSchema = require('./Post');

const profileSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password : {
        type: String,
        required: true,
      },
        userPosts: [postSchema],
    },
    {
      toJSON: {
        virtuals: true,
      }
    }
);

//hash user password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
})

const Profile = model('Profile', profileSchema);

module.exports = Profile;