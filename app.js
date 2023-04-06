// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
})

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
})

// 99 Little Bugs In the Code
app.get("/bugs", (req, res) => {
  res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/101">pull one down, patch it around</a>
  `);
})

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (Number(numberOfBugs) < 200) {
    res.send(`
      <h2>${numberOfBugs} little bugs in the code</h2>
      <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
    `);
  } else {
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/">Too many bugs!! Start over!</a>
    `);
  }
})

// Poke-Express
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
})

app.get("/pokemon/search", (req, res) => {
  const result = [];
  const searchName = req.query.name;
  const foundPokemon = pokemon.find(thePokemon => {
    return searchName.toLowerCase() === thePokemon.name.toLowerCase();
  })

  foundPokemon ? result.push(foundPokemon) : null;

  res.send(result);
})

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`)
  }
})


app.get("*", (req, res) => {
  res.status(404).send(`
    <h1>This is not the page you are looking for.</h1>
    <a href="/">Return Home</a>
  `);
})


// EXPORT
module.exports = app;