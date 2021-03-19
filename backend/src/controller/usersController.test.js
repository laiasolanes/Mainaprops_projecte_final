const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByParam,
  getDataChallenge,
} = require('./usersController');

const User = require('../models/userModel');
const Task = require('../models/taskModel');
const Reward = require('../models/rewardModel');

jest.mock('../models/userModel');

let res;
let req;

beforeEach(() => {
  res = {
    json: jest.fn(),
    send: jest.fn(),
    status: jest.fn(),
  };
});

describe('Given a function createUser', () => {
  describe('When createUser function is called with body', () => {
    test('Then should call newUser json', async () => {
      req = { body: { user_profile: { name: '' } } };

      User.findOneAndUpdate.mockReturnValueOnce(req);

      await createUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a function getUsers', () => {
  describe('When getUsers function is called', () => {
    test('Then should call allUsers json', async () => {
      req = null;
      User.find.mockReturnValueOnce(res);

      await getUsers(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a function updateUser', () => {
  describe('When updateUser function is called with body', () => {
    test('Then should call json', async () => {
      req = { body: { id: '1', user_profile: { name: '', age: 10, image: '' } } };

      User.findOneAndUpdate.mockReturnValueOnce(req);

      await updateUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When updateUser function is called with a falsy argument', () => {
    test('Then should call status with value 500', async () => {
      User.findByIdAndUpdate.mockImplementationOnce(() => {
        throw new Error('Error');
      });

      await updateUser(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a function deleteUser', () => {
  describe('When a function is called with body', () => {
    test('Then should call json', async () => {
      req = { body: { user: { _id: '1' } } };

      User.findByIdAndDelete.mockReturnValueOnce(req);

      await deleteUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When a function is called with falsy arguments', () => {
    test('Then should send message', async () => {
      User.findByIdAndDelete.mockReturnValueOnce(() => {
        throw new Error('Error');
      });

      await deleteUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a function getUserByParam', () => {
  describe('When getUserByParam function is called with params', () => {
    test('Then should call json', () => {
      req = { params: { userId: '1' } };

      User.findById.mockImplementationOnce((query, callback) => callback(true));

      getUserByParam(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When getUserByParam function is called with falsy params', () => {
    test('Then should send message', () => {
      req = { params: { userId: '' } };

      User.findById.mockImplementationOnce((query, callback) => callback(false));

      getUserByParam(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a function getDataChallenge', () => {
  describe('When getDataChallenge function is called', () => {
    test('Then should call allTasks and allrewards json', async () => {
      req = null;
      Task.find.mockReturnValueOnce(res);
      Reward.find.mockReturnValueOnce(res);

      await getDataChallenge(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
