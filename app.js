const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])


app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})


app.get("/:verb/:adjective/:noun", (req,res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send('<h1>99 little bugs in the code<br><a href="/bugs/101">pull one down, patch it around</a></h1>');
  });
  
  app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    const nextNumberOfBugs = parseInt(numberOfBugs) + 2;
  
    if (numberOfBugs >= 200) {
      res.status(400).send("Too many bugs!! Start over!");
    } else {
     
      res.send(`<h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/bugs${nextNumberOfBugs}">Pull one down, patch it around</a>`);
    }
  });
  
  app.get('/pokemon', (req, res) => {
    res.json(pokemon);
  });

  app.get('/pokemon/search', (req, res) => {
    const nameQuery = req.query.name;
    if (!nameQuery) {
      return res.status(400).send('Please provide a name to search for');
    }
    const pokemonMatch = pokemon.find(p => p.name.toLowerCase() === nameQuery.toLowerCase());
    if (!pokemonMatch) {
      return res.status(404).send([]);
    }
    res.json([pokemonMatch]);
  });

  app.get('/pokemon/:indexOfArray', (req, res) => {
    const index = parseInt(req.params.indexOfArray);
    if (isNaN(index) || index < 0 || index >= pokemon.length) {
      return res.status(404).send(`Sorry, no pokemon found at ${req.params.indexOfArray}`);
    }
    res.json(pokemon[index]);
  });

  

  
  
// app.get("*", (req,res) => {
//     res.status(404).send("Sorry, no pokemon found at 9001")
// })

module.exports = app;