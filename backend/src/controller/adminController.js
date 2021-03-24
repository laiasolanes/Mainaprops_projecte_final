/* eslint-disable no-unused-expressions */

const Admin = require('../models/adminModel');
require('../models/challengeModel');
require('../models/rewardModel');
require('../models/taskModel');

async function createAdmin(req, res) {
  const filter = { email: req.body.email };
  const update = req.body;
  const newAdmin = await Admin.findOneAndUpdate(filter, update,
    {
      new: true,
      upsert: true, // Make this update into an upsert
    })
    .populate({ path: 'users' });

  res.json(newAdmin);
}

async function loginAdmin(req, res) {
  const newAdmin = new Admin(req.body);
  newAdmin.save();
  res.json(newAdmin);
}

async function getAdmins(req, res) {
  const allAdmins = await Admin.find({});

  res.json(allAdmins);
}

async function deleteAdmin(req, res) {
  const adminMail = req.body;
  Admin.deleteOne(adminMail, (error, result) => {
    if (error) {
      res.status(404);
      res.send(`Error searching Admin with mail ${error}`);
    } else {
      res.status(302);
      res.json(result);
    }
  });
}

module.exports = {
  createAdmin,
  loginAdmin,
  getAdmins,
  deleteAdmin,
};
