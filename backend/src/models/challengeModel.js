const { model, Schema } = require('mongoose');

const challengeSchema = new Schema({
  start_date: Date,
  end_date: Date,
  challenge_reward: {
    type: Schema.Types.ObjectId, ref: 'Reward',
  },
  challenge_tasks: [
    {
      type: Schema.Types.ObjectId, ref: 'Task',
    },
  ],
});

module.exports = model('Challenge', challengeSchema);
