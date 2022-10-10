"use strict";
require("dotenv").config();
const connectDB = require('./config/db');
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
connectDB();


const app = express();

app.use(express.json({ extended: false }));
/* app.use(cors(corsOptions)); */

module.exports = app;
