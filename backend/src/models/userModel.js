const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  user_profile: {
    name: String,
    age: Number,
    image: String,
  },
  challenges: [
    {
      challenge_start_date: Date,
      challenge_end_date: Date,
      challenge_reward: {
        type: Schema.Types.ObjectId, ref: 'Reward',
      },
      challenge_tasks: [
        {
          type: Schema.Types.ObjectId, ref: 'Task',
        },
      ],
    },

  ],
});

module.exports = model('User', userSchema);
