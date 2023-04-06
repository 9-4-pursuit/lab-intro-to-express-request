const express = require ("express");
const app = express()



app.get("/", (req, res) => {
res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send("Congratulations on starting a new project called ${verb}-${adjective}-${noun}!")
})

app.get("/bugs", (req, res) => {
    res.send(`<h1>"99 little bugs in the code"<h1><a href="/bugs/101"> pull one down, patch it around</a>`)
})

// app.get()

app.get("*", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.status(404).send(`<h1>Too many bugs!! Start over!</h1><a href="/" >Please return Home</a>`)
})



module.exports = app;