const { model, Schema } = require('mongoose');

const rewardSchema = new Schema({
  name: String,
  image: String,
});

module.exports = model('Reward', rewardSchema);
