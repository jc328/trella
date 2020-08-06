const express = require('express');
const router = express.Router();
const { Board} = require('../../db/models')
const cookieParser = require('cookie-parser');

const { requireAuth } = require('./security-utils');
const { asyncHandler } = require('../../utils');

router.use(requireAuth);
router.use(cookieParser());


router.post('/', asyncHandler(async (req, res) => {
    const { id } = req.body;

    const data = await Board.findOne({
      where: {
        user_id : 1
      },
    });
      res.json({ data });
  }));




module.exports = router;
