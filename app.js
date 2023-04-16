const { query } = require("express");
const express = require("express");
const app = express();

//import pokemon
const pokemon = require("/Users/laurawilliams/module-4/labs/express-request/models/pokemon.json");
console.log(pokemon[0]);

//New Name Generator
app.get("/:verb/:adj/:noun", (req, res) => {
  const { verb, adj, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${
      verb + "-" + adj + "-" + noun
    }!`
  );
});

// BUGS

// /bugs
app.get("/bugs", (req, res) => {
  res.send(
    `<h1>"99 little bugs in the code"</h1> <a href='/bugs/101'> "pull one down, patch it around"</a>`
  );
});

// /bugs/:numberOfBugs
app.get("/bugs/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  console.log(numberOfBugs);
  console.log("HELLO");
  if (numberOfBugs >= 200) {
    res.send(`<a href="/bugs">"Too many bugs!! Start over!"</a>`);
  } else if (numberOfBugs < 200) {
    let nextNumBugs = +numberOfBugs + 1;
    res.send(
      `
      <h1>"${numberOfBugs} little bugs in the code"</h1>
      
  <a href='/bugs/${nextNumBugs}'> Pull one down, patch it around</a>
  
  `
    );
  }
});

// POKEMON

//Home Path
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
// All Pokes
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
//Pokemon by index
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  console.log(req.params);
  console.log("TEST");

  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${[indexOfArray]}`);
  }
});

app.get("/bugs/101", (req, res) => {
  res.send("y");
});

// app.get("*", (req, res) => {
//   res.status(404).send("The page you are looking for does not exist");
// });
module.exports = app;
