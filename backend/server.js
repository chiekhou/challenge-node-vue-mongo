const express = require("express");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
// const { Sequelize } = require('sequelize')
dotenv.config();
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes.js').router
// const users = require('./routes/api/users');
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    exposeHeaders: ["Authorization"]
}


const { connectDB } = require("./config/database");

// Connection à la bdd

// const sequelize = new Sequelize(
//     //nom de la bdd
//     '',
//     //l'identifiant de la bdd
//     '',
//     //mot de passe de la bdd
//     '',
//     {
//         host: 'localhost',
//         dialect: 'postgres',
//         dialecOptions: {
//             timezone: 'Etc/GMT-2',
//         },
//         logging: false
//     }
// )

// sequelize.authenticate()
//     .then(_ => console.log('La connexion à la base de données a bien été connecté'))
//     .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))


connectDB();

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));


// Cors Middleware
app.use(cors(corsOptions));

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser());

app.use('/api/users', userRoutes);
// app.use('/api/users', users);

app.get('/', (req, res) => res.send('Projet en cours'));

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Projet en cours sur le port : ${port}`));