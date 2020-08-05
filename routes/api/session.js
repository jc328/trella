const express = require('express');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const { check, validationResult } = require('express-validator');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');
