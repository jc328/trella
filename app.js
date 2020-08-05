
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cors = require('cors');
// const fetch = require('node-fetch');
const routes = require('./routes');
const session = require('express-session');
const { check, validationResult } = require('express-validator');

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();
const csrfProtection = csurf({ cookie : true });
// app.use(express.static(__dirname + '/assets'));
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

// const { user, board, card, list, permission } = require('./db/models');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', asyncHandler(async (req, res, next) => {
    // res.render('landingPage');
    var list = ["item1", "item2", "item3"];
    res.json(list);
}));



module.exports = app;

//Notes
// "start": "node ./bin/www",
