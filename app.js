const express = require("express")
const pokemon = require("./models/pokemon.json")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1><a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params

    Number(numberOfBugs) >= 200 ? res.send(`Too many bugs!! Start over!`) : res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href=${Number(numberOfBugs) + 2}>Pull one down, patch it around</a>`)
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const newArr = []
    const search = req.query

    const found = pokemon.find((poke) => poke.name.toLowerCase() === search.name.toLowerCase())
    if (found) {
        newArr.push(found)
    }
    // console.log("this is the query", req.query)
    res.send(newArr)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params

    !pokemon[indexOfArray] ? res.send(`Sorry, no pokemon found at ${indexOfArray}`) : res.send(pokemon[indexOfArray])

})


app.get("*", (req, res) => {
    res.status(404).send("wrong page")
})

module.exports = app