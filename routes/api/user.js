const express = require('express');
const router = express.Router();
const { User } = require('../../db/models')


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler(async (req, res) => {
  const user = await User.findAll({
    attributes: ["name", "email"],
    // where: {
    //   'fullName' : req.body.search,
    // }
  })
  console.log(user)
}));




module.exports = router;
