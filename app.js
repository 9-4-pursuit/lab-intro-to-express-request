const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params
  req.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get("/bugs", (req, res) => {
  res.send(`<h1>"99 little bugs in the code"<h1><a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const currentBugs = Number(numberOfBugs) + 2;
  if (numberOfBugs < 200) {
    res.send(`
        <p>${numberOfBugs} little bugs in the code</p>
        <a href="/bugs/${currentBugs}">Pull one down, patch it around</a>`);
  } else {
    res.send(
      `<a href="/bugs">Too many bugs!! Start over!</a>`
    );
  }
});

app.get("*", (req, res) => {
  const { verb, adjective, noun } = req.params
  res.status(404).send(`<h1>This is not the page you are looking for</h1><a href="/" >Please return Home</a>`)
})

module.exports = app;