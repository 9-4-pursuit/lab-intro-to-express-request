const express = require('express');
const app = express()

const pokemon = require('./models/pokemon.json');
// console.log(pokemon[0]);

app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon')
})

app.get('/pokemon', (req, res) => {
    res.send(`${JSON.stringify(pokemon)}`)
})

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params
    if (pokemon[indexOfArray]) {
        res.send(`${JSON.stringify(pokemon[indexOfArray])}`)
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code <a href="/bugs/101" >pull one down, patch it around</a></h1>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const { numberOfBugs } = req.params
    Number(numberOfBugs) < 200 ? 
        res.send(`<h1>${numberOfBugs} little bugs in the code <a href=${Number(numberOfBugs) + 2} >Pull one down, patch it around</h1>`)
    : res.send(`<h1><a href="/bugs">Too many bugs!! Start over!</a></h1>`)
})



// app.get('*', (req, res) => {
//     res.status(404).send('This is not the page you are looking for')
// })

module.exports = app;