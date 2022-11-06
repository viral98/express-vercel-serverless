const app = require("../app");
const route = require("../routes/api/books");
app.use("/", route);

module.exports = app;
