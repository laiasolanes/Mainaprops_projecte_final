const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  name: String,
  image: String,
  times: [
    Boolean,
  ],
});

module.exports = model('Task', taskSchema);
