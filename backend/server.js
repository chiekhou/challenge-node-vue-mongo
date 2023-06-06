const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes.js').router


const { connectDB } = require("./config/database");

// Connection à la bdd
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Projet en cours'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Projet en cours sur le port : ${port}`));