const express = require("express");
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.SERVER_URL);

app.use(express.json());
app.use(routes);

app.listen(4000);