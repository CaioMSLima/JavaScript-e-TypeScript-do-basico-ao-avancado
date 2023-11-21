const express = require('express');
const app = express();
const routes = require('./routes');


//you need this to take the value you send in the post
app.use(express.urlencoded({extended: true}));
app.use(routes);

//send my request to door 3000
app.listen(3000,()=>{
console.log('Acess http://localhost:3000');
console.log('Server execult on door 3000')
});