const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])

app.get("/", (req,res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req,res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req,res) => {
    res.send(`<h4>99 little bugs in the code<br>99 little bugs<br><a href="/bugs/101">Pull one Down<br>Patch it around<br><a/>101 bugs in the code</h4>` )
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params

    if(+numberOfBugs >= 200) {
        res.send("<a href=/bugs/99>Too many bugs!! Start over!</a>")
    } else {
     res.send(`<h4>${numberOfBugs} little bugs in the code<br>${numberOfBugs} little bugs<br><a href="/bugs/${+numberOfBugs+2}">Pull one down, patch it around<a/><br>${+numberOfBugs + 2} bugs in the code</h4>`)
    }
})

app.get("/pokemon", (req,res) => {
    res.send(pokemon)
})

app.get("/pokemon/search",(req,res)=>{
    const query = req.query.name
    let found = pokemon.findIndex(el => query.toLocaleLowerCase() === el.name.toLocaleLowerCase())
    res.send(pokemon[found] ? [pokemon[found]] : "[]")
})

app.get("/pokemon/:indexOfArray", (req,res)=>{
    const { indexOfArray } = req.params
    if(indexOfArray < 152){
        let mapped = pokemon.map(el => el)
    res.send(mapped[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})


app.get("*", (req,res) => {
    res.status(404).send("This is not the page you are looking for")
})


module.exports = app
