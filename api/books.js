const app = require("../app");
const route = require("../routes/api/books");
app.use("/api/books/", route);
module.exports = app;
