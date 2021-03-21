const { Router } = require('express');
const adminController = require('../controller/adminController');

function UsersRouter() {
  const router = Router();

  router
    .route('/')
    .post(adminController.createAdmin)
    .get(adminController.getAdmins)
    .delete(adminController.deleteAdmin);

  return router;
}

module.exports = UsersRouter();
