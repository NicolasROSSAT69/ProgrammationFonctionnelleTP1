const express = require('express');

let voitureRouter = require('./routes/voiture');

const app = express();

app.use('/voiture', voitureRouter);

// app.listen(8080, () => {
//     console.log("Serveur à l'écoute")
// })

module.exports = app;