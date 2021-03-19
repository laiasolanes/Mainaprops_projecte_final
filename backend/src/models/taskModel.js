const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  name: String,
  image: String,

});

module.exports = model('Task', taskSchema);
