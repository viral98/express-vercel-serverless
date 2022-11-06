const app = require("../app");
const route = require("../routes/api/books");
app.use("/api/books/", route);
app.use("/api/books/:id", route);

module.exports = app;
