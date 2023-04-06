const express = require ("express");
const app = express()

app.get("/", (req, res) => {
res.send("HellO")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send("Congratulations on starting a new project called ${verb}-${adjective}-${noun}!")
})

app.get("*", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.status(404).send(`<h1>This is not the page you are looking for</h1><a href="/" >Please return Home</a>`)
})



module.exports = app;