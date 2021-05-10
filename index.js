const express = require('express');
var {
    rainbow
} = require('handy-log');
require('dotenv').config();
const mongoose = require('mongoose');
const AppRoutes = require('./app-routes');
const AdminRoutes = require('./admin-routes');
const bodyParser = require('body-parser');
const createAdmin = require('./config/createAdmin');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// create admin
const result = createAdmin();
if (!result) {
    print('admin creation failed');
    process.exit();
}

//express and env config 
const app = express(),
    {
        env: {
            DB_CONNECT,
            PORT
        }
    } = process;

// set the view engine to ejs
app.set('view engine', 'ejs');

// public directory
app.use(express.static(__dirname + '/public'));

//mongodb connection
mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
    console.error('Error connecting to mongo', err);
});

sessionStore = new MongoStore({
    url: DB_CONNECT,
});

// Use the session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 14 * 24 * 60 * 60 // = 14 days. Default
    }
}));

//middleware
app.use(bodyParser.json());

//routes
AppRoutes(app);
AdminRoutes(app);

// Listening to PORT 3000
app.listen(PORT, () => {
    setTimeout(printURL, 50);
    rainbow(`App running on port ${PORT} ..`);
});

const printURL = () => {
    console.log('\x1b[36m%s\x1b[0m', `url: http://localhost:${PORT}`);
}