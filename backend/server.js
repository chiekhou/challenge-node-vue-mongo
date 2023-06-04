const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes.js').router

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Projet en cours'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Projet en cours sur le port : ${port}`));