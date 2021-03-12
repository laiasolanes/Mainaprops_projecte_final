const { model, Schema } = require('mongoose');

const challengeSchema = new Schema({
  user_id: String,
  end_date: Date,
  completed: false,
  reward: {
    type: Schema.Types.ObjectId, ref: 'Reward',
  },
  tasks: [
    {
      type: Schema.Types.ObjectId, ref: 'Task',
    },
  ],
});

module.exports = model('Challenge', challengeSchema);
