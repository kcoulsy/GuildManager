// Updating env variables
require('./config/config');
const { mongooose } = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use(require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
