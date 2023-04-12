const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>"99 little bugs in the code"</h1><a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    bugsNum = Number(numberOfBugs)
    // const totalBugs = math.max(0, 101 - parseInt(numOfBugs))
    // res.send(`101 little bugs in the code" <a href="/bugs/:${number + 2}</a> `)
    if (bugsNum < 200) {
        res.send(`<h1>"${bugsNum} little bugs in the code"</h1><a href="${bugsNum + 2}">Pull one down, patch it around</a>`)
    } else {
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`)
    }
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const finalPokemon = pokemon.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
    if (finalPokemon) {
        res.send([finalPokemon]);
    } else {
        res.send([]);
    }
})

app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params
    if (pokemon[Number(index)]) {
        res.send(pokemon[Number(index)])
    } else {
        res.send("Sorry, no pokemon found at " + index)
    }
})

app.get("*", (req, res) => {
    res.status(404).send("This is not the page you are looking for")
})
module.exports = app;