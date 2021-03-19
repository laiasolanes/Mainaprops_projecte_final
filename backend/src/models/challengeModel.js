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
      task_id: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
      times: [Boolean],
    },
  ],
});

module.exports = model('Challenge', challengeSchema);
