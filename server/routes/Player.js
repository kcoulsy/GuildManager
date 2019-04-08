const {Player} = require('../models/Player');

exports.create = (req, res) => {
    const player = new Player(req.body);

    player.save().then(()=> {
        res.send('saved');
    }).catch(e => {
        res.send('Error Saving Player');
    })
};

exports.find = (req, res) => {
    Player.find(req.body).then((response)=> {
        res.json(response);
    }).catch(e => {
        res.send('Could not Find Player');
    })
};

exports.update = (req, res) => {
    const {_id} = req.body
    Player.findOneAndUpdate({_id}, { $set: req.body }, { new: true }).then((response)=> {
        if (!response) {
            res.status(404).send();
        }
        console.log(response);
        res.send(response);
    }).catch(e => {
        res.send('Could not Find Player');
    })
};
