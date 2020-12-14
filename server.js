const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const handlebars = require("express-handlebars");
const routes = require("./controllers/burger_controller.js");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
