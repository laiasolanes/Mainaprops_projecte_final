/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');
const Task = require('../models/taskModel');
const Reward = require('../models/rewardModel');
const Challenge = require('../models/challengeModel');
const Admin = require('../models/adminModel');
require('../models/challengeModel');
require('../models/rewardModel');
require('../models/taskModel');
require('../models/adminModel');

async function createUser(req, res) {
  const filter = req.body.user_profile.name;

  const update = {
    user_profile:
    {
      name: req.body.user_profile.name,
      age: req.body.user_profile.age,
      image: req.body.user_profile.image,
    },
  };

  const newUser = await User.findOneAndUpdate(filter, update,
    {
      new: true,
      upsert: true, // Make this update into an upsert
    });
  const id = req.body.adminId;
  const adminUpdate = {
    $push: {
      users: newUser,
    },
  };
  console.log('NEWUSER ', newUser);
  try {
    await Admin
      .findByIdAndUpdate(id, adminUpdate, { new: true })
      .populate({ path: 'users' });
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating admin with users');
  }
}

async function getUsers(req, res) {
  const allUsers = await User
    .find({});

  res.json(allUsers);
}

async function updateUser(req, res) {
  const id = req.body._id;
  const update = {
    $set: {
      'user_profile.name': req.body.user_profile.name,
      'user_profile.age': req.body.user_profile.age,
      'user_profile.image': req.body.user_profile.image,
    },

  };
  try {
    const updatedUser = await User
      .findByIdAndUpdate(id, update, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

async function deleteUser(req, res) {
  const id = req.body.user._id;

  const user = await User.findById(id);
  user.user_profile.challenges.forEach(async (challengeId) => {
    await Challenge.findByIdAndDelete(challengeId);
  });

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
    userChallenges = await userChallenges.populate({ path: 'user_profile.challenges.tasks.description' }).execPopulate();
    userChallenges = await userChallenges.populate({ path: 'user_profile.challenges.reward' }).execPopulate();
    res.status(200);
    res.json(userChallenges);
  } catch (error) {
    res.status(500);
    res.send('There was an error get user by param');
  }
}

async function getDataChallenge(req, res) {
  const allTasks = await Task
    .find({});

  const allRewards = await Reward
    .find({});

  res.json({ allTasks, allRewards });
}

async function createChallenge(req, res) {
  const newChallenge = new Challenge({ ...req.body, completed: false, end_date: null });

  newChallenge.save();

  const id = req.body.user_id;
  const update = {
    $push: {
      'user_profile.challenges': newChallenge,
    },
  };

  try {
    const updatedUser = await User
      .findByIdAndUpdate(id, update, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating user with challenges');
  }
}

async function updateChallenge(req, res) {
  const id = req.body._id;

  const isIncomplete = req.body.tasks.find(({ times }) => times.current !== times.total);

  const update = {
    ...req.body,

    completed: !isIncomplete,
    end_date: isIncomplete ? null : new Date(),
  };

  try {
    let updatedChallenge = await Challenge
      .findByIdAndUpdate(id, update, { new: true });
    updatedChallenge = await updatedChallenge.populate({ path: 'tasks.description' }).execPopulate();
    updatedChallenge = await updatedChallenge.populate({ path: 'reward' }).execPopulate();

    res.json(updatedChallenge);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating challenge');
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByParam,
  getDataChallenge,
  createChallenge,
  updateChallenge,
};
