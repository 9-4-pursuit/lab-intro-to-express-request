const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/:verb/:adj/:noun", (req, res) => {
  const { verb, adj, noun } = req.params;
  res.send(
    "Congratulations on starting a new project called jumping-joyous-jellybean!"
  );
});

app.get("*", (req, res) => {
  res.status(404).send("The page you are looking for does not exist");
});
