const User = require('../models/userModel');

function createUser(req, res) {
  const newUser = new User(req.body);
  newUser.save();
  res.json(newUser);
}

async function getUsers(req, res) {
  const allUsers = await User
    .find({});
  res.json(allUsers);
}

module.exports = {
  createUser,
  getUsers,
};
