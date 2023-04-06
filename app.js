const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get('*', (req, res) => {
    res.status(404).send('This is not the page you are looking for')
})

module.exports = app;