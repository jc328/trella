const express = require('express');
const router = express.Router();

router.get('/me', function(req, res) {
  // res.json({
  //   email: req.player.email,
  //   name: req.player.name,
  // });
});

module.exports = router;
