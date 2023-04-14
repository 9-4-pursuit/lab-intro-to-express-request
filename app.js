
const express = require("express");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])

const app = express();


app.use(express.json());

// STARTING ROUTE
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

// NAME GENERATOR
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});

// 99 LITTLE BUGS
app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>
    <p><h2>
    <a href="/bugs/101">pull one down, patch it around</a>
    </h2></p>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;

    if (numberOfBugs >= 200) {
        res.send(`<a href="/bugs" >Too many bugs!! Start over!</a>`);
    } else {
        res.send(`${numberOfBugs} little bugs in the code<a href="/bugs/${Number(numberOfBugs) + 2}" >Pull one down, patch it around</a>`);
    }
});

// POKE-EXPRESS
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;

    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray]);
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const searchPokemon = pokemon.find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
    if (searchPokemon) {
        res.send([searchPokemon]);
    } else {
        res.send([])
    }
});

app.get("*", (req, res) => {
    res.status(404).send("This is not the page you are looking for");
});



module.exports = app;
