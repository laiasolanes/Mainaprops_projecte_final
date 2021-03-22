const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
require('dotenv').config();

// INIT APP
const app = express();

// SETTINGS
const port = process.env.PORT;
const database = process.env.DB;

// IMPORT ROUTES
const usersRouter = require('./src/router/usersRouter');
const adminRouter = require('./src/router/adminRouter');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECTING TO DB
connect(database,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// ROUTES
app.use('/api/users', usersRouter);
app.use('/api/admin', adminRouter);

// STARTING THE SERVER
app.listen(port, () => debug(`Server is running in port ${port}`));
