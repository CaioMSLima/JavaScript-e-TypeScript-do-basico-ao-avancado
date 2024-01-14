// your connection and password to access the bank are secure and are not shared on the web
require('dotenv').config();

const express = require('express');
const app = express();
//connect to data base

const mongoose = require('mongoose');

//this app.emit when finish this connetion emit finish
//{useNewUrlParser: true, useUnifiedTopologu:true} i dont have youse if you creat dataBAse
//process.env.CONNECTIONSTRING you pick the value in .env
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => app.emit('finish'))
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');

const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal ,checkCrsfError, csrfMiddleware} = require('./src/middlewares/middleware');

const session = require('express-session');
//you need this to save de session in mongo data base
const MongoStore = require('connect-mongo');

//This generate flash messages
const flashMessages =require('connect-flash')

//is all is middleware
//you need this to take the value you send in the post
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

//prevent someone with bad intentions from posting or modifying something on my website
app.use(helmet());

//use to declare where yours views file is, public = css, bundle
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    //this is the same of id but is not a single
    secret:'this is the same of id',
    //save de session in mongo data base
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flashMessages())

//use to declare where yours views file is
app.set('views', path.resolve(__dirname, 'src', 'views'));
//or
// app.set('views', './src/views')


//render views
app.set('view engine', 'ejs')

//this generation one token that valid if this post is the my code
app.use(csrf());

app.use(middlewareGlobal);
app.use(checkCrsfError);
app.use(csrfMiddleware);

app.use(routes);

//await app emit 'finish' to do this
app.on('finish', () => {
    //send my request to door 3000
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Server execult on door 3000')
    });
})
