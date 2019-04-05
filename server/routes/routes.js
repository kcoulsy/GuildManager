const express = require('express');

const router = express.Router();

const Player = require('./Player');

// Users routes
// router.get('/player', Player);
router.post('/player', Player.create);
// router.patch('/player');
// router.delete('/player');

module.exports = router;
