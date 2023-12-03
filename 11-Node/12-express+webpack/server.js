const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//you need this to take the value you send in the post
app.use(express.urlencoded({extended: true}));

//use to declare where yours views file is, public = css, bundle
app.use(express.static(path.resolve(__dirname,'public')))

//use to declare where yours views file is
app.set('views', path.resolve(__dirname, 'src','views'));
//or
// app.set('views', './src/views')


//render views
app.set('view engine', 'ejs')

app.use(routes);

//send my request to door 3000
app.listen(3000,()=>{
console.log('Acess http://localhost:3000');
console.log('Server execult on door 3000')
});