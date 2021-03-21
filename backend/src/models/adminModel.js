const { model, Schema } = require('mongoose');

const adminSchema = new Schema({
  name: String,
  email: String,
  image: String,
  users: [
    {
      type: Schema.Types.ObjectId, ref: 'User',
    },
  ],
});

module.exports = model('Admin', adminSchema);
