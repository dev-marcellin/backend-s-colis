const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const colisRoutes = require('./routes/colis.routes');
const busRoutes = require('./routes/bus.routes');
const ticketRoutes = require('./routes/ticket.routes');
const suiviRoutes = require('./routes/suivi.routes');
const infosRoutes = require('./routes/infos.routes');

require('dotenv').config({path: './config/.env'});
require('./config/db');
//code qr 
const qr = require("qrcode");
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:8080",
    credential: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//code qr
app.set("view engine", "ejs");

//jwt tester l'utilisateur 
app.get('*', checkUser);
app.get('/jwtid', requireAuth,(req, res)=>{
    res.status(200).send(res.locals.user._id);
})

//routes
//users routes 
app.use('/api/user', userRoutes);

//colis routes
app.use('/api/colis', colisRoutes);

//bus routes
app.use('/api/bus', busRoutes);


//impression ticket 
app.use('/api/ticket', ticketRoutes);


//suivre un colis
app.use('/api/suivre', suiviRoutes);

//information somaire

app.use('/api/infos', infosRoutes )




//server
app.listen(process.env.PORT, ()=>{
    console.log(`ecoute sur le port ${process.env.PORT}`);
})
