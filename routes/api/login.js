const express = require('express');
const router = express.Router();
const Users = require('../../db/models/user')

router.get('/test', (req, res) => res.send('test'))

router.get('/login', function(req, res) {

});

module.exports = router;
