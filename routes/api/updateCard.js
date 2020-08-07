const express = require('express');
const router = express.Router();
const { List, Card } = require('../../db/models')
const { asyncHandler } = require('../../utils');


router.post('/', asyncHandler(async (req, res) => {
    const { title, description, comments, list_id } = req.body;

      const card = await Card.create({
        title: title,
        description: description,
        comments: comments,
        list_id: list_id,
        createdAt: new Date(),
        updatedAt: new Date()
        });

      res.json({ card });
    }
  ))

module.exports = router;
