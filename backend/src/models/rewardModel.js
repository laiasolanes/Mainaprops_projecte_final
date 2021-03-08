const { model, Schema } = require('mongoose');

const rewardSchema = new Schema({
  reward_name: String,
  reward_image: String,
});

module.exports = model('Reward', rewardSchema);
