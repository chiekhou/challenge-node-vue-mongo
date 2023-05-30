const express = require("express");

const app = express();

app.get('/', (req, res) => res.send('Projet en cours'));

app.listen(3000, () => console.log("Projet en cours"))