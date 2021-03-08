/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');

async function createUser(req, res) {
  const filter = { user_profile: { name: req.body.user_profile.name } };
  const update = req.body;
  const newUser = await User.findOneAndUpdate(filter, update,
    {
      new: true,
      upsert: true, // Make this update into an upsert
    });

  res.json(newUser);
}

async function getUsers(req, res) {
  const allUsers = await User
    .find({})
    .populate('reward', 'task');

  res.json(allUsers);
}

async function updateUser(req, res) {
  const id = req.body._id;

  try {
    const updatedUser = await User
      .findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

async function deleteUser(req, res) {
  const id = req.body._id;

  const deletedUser = await User.findByIdAndDelete(id);
  res.json(deletedUser);
}

async function getUserByParam(req, res) {
  const { userId } = req.params;

  User.findById(userId, (error, adventure) => {
    if (error) {
      res.status(404);
      res.send(`There was an error. User id ${userId} does not exist.`);
    } else {
      res.status(302);
      res.json(adventure);
    }
  });
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByParam,
};
