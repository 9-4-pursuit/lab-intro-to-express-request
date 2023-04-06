const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  const number_of_bugs = 99;
  res.send(
    `${number_of_bugs} little bugs in the code <br> <h3><a href="/bugs/${
      number_of_bugs + 2
    }">${"pull one down, patch it around"}</a></h3>`
  );
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  let number = parseInt(number_of_bugs);
  if (number < 200) {
    res.send(`      

        <h1>${number} little bugs in the code</h1>
        <a href="/bugs/${(number += 2)}">Pull one down, patch it around</a>
        `);
  } else {
    res.send(`      
        Too many bugs!! Start over!

        <a href="/bugs/">Pull one down, patch it around</a>                
        `);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Page not found");
});

module.exports = app;
