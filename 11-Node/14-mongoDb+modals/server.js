// your connection and password to access the bank are secure and are not shared on the web
require('dotenv').config();

const express = require('express');
const app = express();
//connect to data base

const mongoose = require('mongoose');

//this app.emit when finish this connetion emit finish
//{useNewUrlParser: true, useUnifiedTopologu:true} i dont have youse if you creat dataBAse
//process.env.CONECTIONSTRING you pick the value in .env
mongoose.connect(process.env.CONECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.emit('finish'))
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

//is all is middleware
//you need this to take the value you send in the post
app.use(express.urlencoded({ extended: true }));

app.use(middlewareGlobal)

//use to declare where yours views file is, public = css, bundle
app.use(express.static(path.resolve(__dirname, 'public')))

//use to declare where yours views file is
app.set('views', path.resolve(__dirname, 'src', 'views'));
//or
// app.set('views', './src/views')


//render views
app.set('view engine', 'ejs')

app.use(routes);

//await app emit 'finish' to do this
app.on('finish', () => {
    //send my request to door 3000
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Server execult on door 3000')
    });
})
