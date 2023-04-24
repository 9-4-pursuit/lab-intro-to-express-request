const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon")
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params
  req.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
});

app.get("/bugs", (req, res) => {
  res.send(`<h1>"99 little bugs in the code"<h1><a href="/bugs/101"> Pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const currentBugs = Number(numberOfBugs) + 2;
  if (numberOfBugs >= 200) {
    res.send(`<a href="/bug">Too many bugs!! Start over!</a>`);
  } else {
    res.send(`${numberOfBugs} little bugs in the code<a href="/bugs/${currentBugs}">Pull one down, patch it around</a>`);
  }
});

//POKEMON
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query
  const pickThatPokemon = pokemon.find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
  if (pickThatPokemon) {
    res.send([pickThatPokemon]);
  } else {
    res.send([])
  }
});

app.get("*", (req, res) => {
  res.status(404).send("This is not the page you are looking for")
});

module.exports = app;
