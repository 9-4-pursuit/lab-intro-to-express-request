const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

// Poke-Express
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get(`/pokemon/search`, (req, res) => {
    const reqName = req.query.name;
  const foundPokemon = pokemon.find(
    (poke) => poke.name.toLowerCase() === reqName.toLowerCase()
  );
  if (foundPokemon) {
    res.send([foundPokemon]);
  } else {
    res.send([]);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray]);
    } else {
        res.send("Sorry, no pokemon found at " + indexOfArray);
    }
})





// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})


// 99 Little Bugs In the Code
let numberOfBugs = 99;

app.get("/bugs", (req, res) => { 
    if (numberOfBugs >= 200) {
        res.send(`<a href="/">Too many bugs!! Start over!<a/>`)
    } else {
        res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">Pull one down, patch it around</a>`)
    }
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    numberOfBugs = parseInt(req.params.numberOfBugs)
    if (numberOfBugs >= 200) {
        res.send(`<a href="/">Too many bugs!! Start over!<a/>`)
    } else {
        res.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${numberOfBugs + 2}">Pull one down, patch it around</a>`)
    }
})

app.get("*", (req, res) => {
    res.status(404).send(`This is not the page you are looking for`);
  });


// EXPORT
module.exports = app;