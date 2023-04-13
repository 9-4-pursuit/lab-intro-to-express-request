
const express = require("express");
const app = express();

const pokeArray = require("./models/pokemon.json");

app.use(express.json());

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

module.exports = app;
