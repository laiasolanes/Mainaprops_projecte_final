const { Router } = require('express');
const usersController = require('../controller/usersController');

function UsersRouter() {
  const router = Router();

  router
    .route('/')
    .post(usersController.createUser)
    .get(usersController.getUsers);

  return router;
}

module.exports = UsersRouter();
