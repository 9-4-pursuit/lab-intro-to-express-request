// Dependencies
const express = require ("express");
const pokemon = require("./models/pokemon.json");


// Config
const app = express()



// Routes
app.get("/", (req, res) => {
res.send("Welcome 99 Pokemon")
})


// New project generator

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})


// 99 little bugs in the code

app.get("/bugs", (req, res) => {
    res.send(`
        <h1>"99 little bugs in the code"<h1>
        <a href="/bugs/101"> pull one down, patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const numberOfBugs = Number(req.params.numberOfBugs);
    const nextBugs = numberOfBugs + 2;

  if (numberOfBugs >= 200) {
    res.send(`
      <h1>Too many bugs!! Start over!</h1>
      <h1><a href="/bugs">Please return Home</a><h1>
    `);
  } else {
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      <h1><a href="/bugs/${nextBugs}">Pull one down, patch it around</a><h1>
    `);
  }
});


app.get("/pokemon", (req, res) => {
    // console.log(pokemon[1]);
    res.send(pokemon);
  });
  

// Route to search for a Pokemon by name
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const selectPokemon = pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );
  if (!selectPokemon) {
    res.send([]);
  } else {
    res.send([selectPokemon]);
  }
});

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  const pokemonAtIndex = pokemon[index];

if (pokemonAtIndex) {
  res.send(pokemonAtIndex);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

// Route to display a list of all the Pokemon as an unordered list of links
app.get("/pokemon-pretty", (req, res) => {
  const listItems = pokemon.map((p, index) => `<li><a href="/pokemon/${index}">${p.name}</a></li>`);
  const html = `<ul>${listItems.join("")}</ul>`;
  res.send(html);
});



// Error page
app.get("*", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.status(404).send(`<h1>This is not the page you are looking for</h1><a href="/" >Please return Home</a>`)
})


module.exports = app;