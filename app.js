const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cors = require('cors');


const session = require('express-session');
const { check, validationResult } = require('express-validator');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const fetch = require('node-fetch');

// const routes = require('./routes');
const sessionRouter = require('./routes/api/login.js')
const signUpRouter = require('./routes/api/signup.js')
const loginRouter = require('./routes/api/login.js')



// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const app = express();
const csrfProtection = csurf({ cookie : true });
app.use(express.static(__dirname + '/assets'));
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/session", sessionRouter)
app.use("/signup", signUpRouter)
app.use("/login", loginRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', asyncHandler(async (req, res) => {
  var list = "Router setup"
  res.json(list);
}));




// app.use(function(_req, _res, next) {
// 	next(createError(404));
// });

// app.use(function(err, _req, res, _next) {
// 	res.status(err.status || 500);
// 	if (err.status === 401) {
// 		res.set('WWW-Authenticate', 'Bearer');
// 	}
// 	res.json({
// 		message: err.message,
// 		error: JSON.parse(JSON.stringify(err))
// 	});
// });

module.exports = app;
