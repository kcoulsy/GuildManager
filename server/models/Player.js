const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true
    },
    rank: {
        type: String,
        required: true,
        minlength: 2,
    },
    playerClass: {
        type: String,
        required: true,
        minlength: 2,
    },
    role: {
        type: String,
        required: true,
        minlength: 2,
    }
})

const Player = mongoose.model('Player', PlayerSchema)

module.exports = {
    Player
}
