const express = require("express");
// const PORT = process.env.PORT || 8888;
const PORT = 8888;

const app = express();

const pokemon = require("./models/pokemon");
// console.log(pokemon[0]); // (works ok)

function pokemonlist() {
    let arrayString = "";
    for (i = 0; i < pokemon.length; i++) {
        arrayString = arrayString + `<div>${pokemon[i].name}</div>`;
    }
    return arrayString
}

function pokemonlistPretty() {
    let arrayString = "";
    for (i = 0; i < pokemon.length; i++) {
        // \ is escape character so output will not include first character as newline
        //
        arrayString = arrayString +
        `\
        <div>Name: ${pokemon[i].name}</div>
        <img src=${pokemon[i].name} />
        <div>Type: ${pokemon[i].type}</div>
        `
    }
    return arrayString
}

function pokemonSelect(indexOfArray) {
    // console.log(indexOfArray);
    if (pokemon[indexOfArray]) {
        console.log("Find", pokemon[indexOfArray])
        return JSON.stringify(pokemon[indexOfArray]);
    } else {
        return `sorry, no pokemon found at /pokemon/${indexOfArray}`
    }
}

function searchPokemon(pokemonToFind) {
    for (i = 0; i < pokemon.length; i++) {
        if (pokemon[i].name === pokemonToFind) {
            return JSON.stringify(pokemon[i])
        } else {
            return `sorry, ${pokemonToFind} not found`
        }
    }

}

app.get("/", (req, res) => {
    res.send('Welcome 99 Pokemon')
})

app.get("/pokemon", (req, res) => {
    res.send(`${pokemonlist()}`)
})

app.get("/pokemon-pretty", (req, res) => {
    res.send(`${pokemonlistPretty()}`)
})

app.get("/pokemon/search", (req, res) => {
    const pokemonToFind = req.query.name
    res.send(`${searchPokemon(pokemonToFind)}`)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const indexOfArray = req.params.indexOfArray
    res.send(`${pokemonSelect(indexOfArray)}`)
})

//http://localhost:8888/pokemon/search?name=oddish

app.get("/bugs", (req, res) => {
    res.send(`99 little bugs in the code <a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:bugcount", (req, res) => {
    const bugcount = Number(req.params.bugcount);
    if (bugcount > 200) {
        res.send(`Too many bugs!! Start over!`)
    } else {
        res.send(`${bugcount} little bugs in the code <a href="/bugs/${bugcount + 2}">pull one down, patch it around</a>`)
    }
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const verb = req.params.verb;
    const adjective = req.params.adjective;
    const noun = req.params.noun;

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app;