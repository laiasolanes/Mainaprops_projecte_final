const { Router } = require('express');
const usersController = require('../controller/usersController');

function UsersRouter() {
  const router = Router();

  router
    .route('/')
    .post(usersController.createUser)
    .get(usersController.getUsers)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

  router
    .route('/:userId')
    .get(usersController.getUserByParam)
    .put(usersController.updateChallenge);

  router
    .route('/:userId/newchallenge')
    .get(usersController.getDataChallenge)
    .post(usersController.createChallenge);

  return router;
}

module.exports = UsersRouter();
