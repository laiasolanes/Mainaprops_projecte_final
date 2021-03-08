const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  task_name: String,
  task_image: String,
  task_times: Number,
});

module.exports = model('Task', taskSchema);
