const express = require('express');
const pokemon = require('./models/pokemon.json');
const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Welcome 99 Pokemon');
});
app.get('/:verb/:adjective/:noun', (req, res) => {
  const { verb, adjective, noun } = req.params;
  res
    .status(200)
    .send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

app.get('/bugs', (req, res) => {
  res
    .status(200)
    .send(
      `<h1>99 little bugs in the code</h1><a href='/bugs/100'>pull one down, patch it around</a>`
    );
});
app.get('/bugs/:index', (req, res) => {
  if (parseInt(req.params.index) >= 200) {
    res.status(200).send(`Too many bugs!! Start over!`);
  } else {
    res
      .status(200)
      .send(
        `${req.params.index} little bugs in the code<a href='/bugs/${
          parseInt(req.params.index) + 2
        }'>Pull one down, patch it around</a>`
      );
  }
});

app.get('/pokemon/search', (req, res) => {
  const found = pokemon.filter(
    poke => poke.name.toLowerCase() === req.query.name.toLowerCase()
  );
  if (found.length > 0) {
    res.send(found);
  } else {
    res.send([]);
  }
});
app.get('/pokemon', (_, res) => {
  res.send(pokemon);
});
app.get('/pokemon/:index', (req, res) => {
  const singlePokemon = pokemon[req.params.index];
  if (singlePokemon) {
    res.send(singlePokemon);
  } else {
    res.send(`Sorry, no pokemon found at ${req.params.index}`);
  }
});
app.get('*', (_, res) => {
  res.status(404).send('404 Page not found!');
});
module.exports = app;
