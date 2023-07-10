const express = require("express");
const pool = require('./db/db');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const Sequelize = require ('sequelize');
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
const db = require('./db/');
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

db.sequelize.sync({force: true}).then(()=>{
    console.log('synced db.');
}).catch((err)=>{
    console.log('Failed to sync db: '+err.message);
})

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


// Cors Middleware
app.use(cors(corsOptions));

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser());

app.use('/api/users', userRoutes);
// app.use('/api/users', users);

app.get('/', (req, res) => res.send('Projet en cours'));

app.post('/', (req, res)=>{
    const {name, location} = req.body;
    res.status(200).send({
        message:`YOUR KEYS WERE ${name}, ${location}`
    })
})

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Projet en cours sur le port : ${port}`));