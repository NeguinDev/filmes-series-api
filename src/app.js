const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.set('json spaces', 3);

const routers = require('./routers');
app.use(routers);

module.exports = app;