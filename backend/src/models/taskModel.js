const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  name: String,
  image: String,
  times: Number,
});

module.exports = model('Task', taskSchema);
