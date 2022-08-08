// Seeding script
const db = require('../config/connection');
const { Profile } = require('../models');
const { Post } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
    try {
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
      await Post.deleteMany({});
      await Post.create(postSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });