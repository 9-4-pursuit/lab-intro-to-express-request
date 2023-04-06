const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("*", (req, res) => {
  res.status(404).send("This is not the page you are looking for");
});

module.exports = app;