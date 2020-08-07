const express = require('express');
const router = express.Router();
const { Board, List, Card} = require('../../db/models')
const cookieParser = require('cookie-parser');

const { requireAuth } = require('./security-utils');
const { asyncHandler } = require('../../utils');

router.use(requireAuth);
router.use(cookieParser());

router.get('/', asyncHandler(async (req, res) => {
    const { id } = req.body;
    let boardDataArr = []
    let listDataArr = []

    const boardData = await Board.findAll({
      where: {
        user_id : 1
      },
    });
    for (x of boardData) {
      boardDataArr.push(x.id)
    }

    const listData = await List.findAll ({
      where: {
        board_id: [...boardDataArr]
      }
    })

    for (x of listData) {
      listDataArr.push(x.id)
    }

    const cardData = await Card.findAll ({
      where: {
        list_id: [...listDataArr]
      }
    })

      res.json({ cardData, listData, boardData });
  }));


module.exports = router;
