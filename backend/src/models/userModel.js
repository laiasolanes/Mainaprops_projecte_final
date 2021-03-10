const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  user_profile: {
    name: String,
    age: Number,
    image: String,
    challenges: [
      {
        type: Schema.Types.ObjectId, ref: 'Challenge',
      },
    ],
  },

});

module.exports = model('User', userSchema);
