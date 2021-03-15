/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');
require('../models/challengeModel');
require('../models/rewardModel');
require('../models/taskModel');

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
    .find({});

  res.json(allUsers);
}

async function updateUser(req, res) {
  const id = req.body._id;
  try {
    const updatedUser = await User
      .findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);

    console.log(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

async function deleteUser(req, res) {
  const id = req.body.user._id;

  try {
    await User.findByIdAndDelete(id);
    res.send('Deleted Ok');
  } catch (error) {
    res.status(500);
    res.send('There was an error deleting');
  }
}

async function getUserByParam(req, res) {
  const { userId } = req.params;

  try {
    let userChallenges = await User.findById(userId);
    userChallenges = await userChallenges.populate({ path: 'user_profile.challenges' }).execPopulate();
    userChallenges = await userChallenges.populate({ path: 'user_profile.challenges.tasks' }).execPopulate();
    userChallenges = await userChallenges.populate({ path: 'user_profile.challenges.reward' }).execPopulate();
    res.status(200);
    res.json(userChallenges);
  } catch (error) {
    res.status(500);
    res.send('There was an error get user by param');
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByParam,
};

// .populate('reward', 'task');
