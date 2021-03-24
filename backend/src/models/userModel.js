const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  age: Number,
  image: String,
  challenges: [
    {
      type: Schema.Types.ObjectId, ref: 'Challenge',
    },
  ],
});

module.exports = model('User', userSchema);
