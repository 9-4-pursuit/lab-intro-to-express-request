const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
})

app.get("/bugs", (req, res) => {
    res.send(
    `<h1>99 little bugs in the code</h1>
    <a href= "/bugs/101"> Pull one down, patch it around</a>`
    );
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    const coolBug = Number(numberOfBugs);
    
    res.send(
    `<p> ${coolBug} little bugs in the code </p>
     <a href= "${coolBug < 200 ? coolBug + 2 : "./"}" >${coolBug < 200 
     ? "Pull one down, patch it around"
     : "Too many bugs!! Start over!"}</a>`
    );
     });

     

app.get("*", (req, res) => {
    res.status(404).send("This is not the page you are looking for")
})


module.exports = app;