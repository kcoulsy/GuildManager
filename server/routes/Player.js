const { Player } = require("../models/Player");

exports.create = (req, res) => {
  const player = new Player(req.body);

  player.save().then(() => {
    res.send("saved");
  });
};
