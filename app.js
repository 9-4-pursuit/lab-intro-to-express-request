const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");


app.get("/", ( req, res ) => {
    res.send("Welcome 99 Pokemon")
});

app.get("/:verb/:adjective/:noun", ( req, res ) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});

app.get("/bugs", ( req, res ) => {
    res.send(`<h1>99 little bugs in the code</h1><a href=/bugs/101>pull one down, patch it around</a>`)
});

app.get("/bugs/:numberOfBugs", ( req, res ) => {
    const { numberOfBugs } = req.params;
    let runNumberOfBugs = parseInt(numberOfBugs)

    if (runNumberOfBugs < 200) {
    res.send(`<h1>${runNumberOfBugs} little bugs in the code</h1><a href=/bugs/${runNumberOfBugs += 2}>Pull one down, patch it around</a>`) } else {
    res.send(`<a href="/bugs">Too many bugs!! Start over!"</a>`)
    }
});


app.get("/pokemon", ( req, res ) => {
    res.send(pokemon)
});

app.get("/pokemon/search", ( req, res ) => {
    const { name } = req.query
    let found = pokemon.find((poke) => 
    poke.name.toLowerCase() === name.toLowerCase()
    )
    if(found){
    res.send([found])
    } else {
    res.send([])
   }
});

app.get("/pokemon/:index", ( req, res ) => {
    const { index } = req.params
    if (pokemon[index]) {
        res.send(pokemon[index]);
    } else {
        res.send("Sorry, no pokemon found at " + index);
    }
});

app.get("*", ( req, res ) => {
    res.status(404).send("This is not the page you are looking for")
});


module.exports = app;