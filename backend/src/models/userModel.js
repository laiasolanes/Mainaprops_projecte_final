const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  user_profile: {
    name: String,
    age: Number,
    image: String,
  },
});

module.exports = model('User', userSchema);