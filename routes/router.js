//routing for local development server (devServer.js)

const routes = require("express").Router();

const books = require("./books");


routes.use("/", books);

module.exports = routes;
