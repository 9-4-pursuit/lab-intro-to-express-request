// Dependencies
const express = require ("express");

// Config
const app = express()


// Routes
app.get("/", (req, res) => {
res.send("Welcome 99 Pokemon")
})


// New project generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})


// 99 Bugs 
app.get("/bugs", (req, res) => {
    res.send(`
        <h1>"99 little bugs in the code"<h1>
        <a href="/bugs/101"> pull one down, patch it around</a>
    `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const numberOfBugs = Number(req.params.numberOfBugs);
    const nextBugs = numberOfBugs + 2;

  if (numberOfBugs >= 200) {
    res.send(`
      <h1>Too many bugs!! Start over!</h1>
      <a href="/bugs">Please return Home</a>
    `);
  } else {
    res.send(`
      <h1>${numberOfBugs} little bugs in the code</h1>
      <a href="/bugs/${nextBugs}">Pull one down, patch it around</a>
    `);
  }
});




app.get("*", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.status(404).send(`<h1>Too many bugs!! Start over!</h1><a href="/" >Please return Home</a>`)
})
//This is not the page you are looking for


module.exports = app;