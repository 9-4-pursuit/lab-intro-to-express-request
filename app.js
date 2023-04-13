const express = require("express");

const app = express();

const pokemon = require("./models/pokemon.json");
//console.log(pokemon[0]);

//routes
app.get("/", (_, response) => {
    response.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (request, response) => {

    const {verb, adjective, noun} = request.params;
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (_, response) => {

    response.send(`<h1>99 little bugs in the code</h1><a href="/bugs/101" > pull one down, patch it around </a>`)
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    const {numberOfBugs} = request.params;

    if (numberOfBugs >= 200) {

        response.send(`<a href="/bugs" >Too many bugs!! Start over! </a>`)
    } 

    else {
        response.send(`${numberOfBugs} little bugs in the code <a href="/bugs/${Number(numberOfBugs) + 2}" > Pull one down, patch it around </a>`)
    }
})

app.get("/pokemon", (_, response) => {
    response.send(pokemon)
})

app.get("/pokemon/:indexOfArray", (request, response) => {
    const {indexOfArray} = request.params;

    if (pokemon[indexOfArray]) {
        response.send(pokemon[indexOfArray])
    }
    else {
        response.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } 
})

app.get("/pokemon/search", (request, response) => {
    const reqName = request.query.name;
    const foundPokemon = pokemon.find((iPokemon) => iPokemon.name.toLowerCase() === reqName.toLowerCase());

    if (foundPokemon) {
        response.send([foundPokemon])
    }
    else {
        response.send([])
    }
})

app.get("*", (_, response) => {
    response.status(404).send(`<h1>Not the page you are looking for</h1><a href="/" >Please return home</a>`)
})

//exports
module.exports = app;