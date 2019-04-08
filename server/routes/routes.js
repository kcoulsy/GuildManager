const express = require('express');

const router = express.Router();

const Player = require('./Player');

// Users routes
router.get('/player', Player.find);
router.post('/player', Player.create);
router.patch('/player', Player.update);
// router.delete('/player');

module.exports = router;
