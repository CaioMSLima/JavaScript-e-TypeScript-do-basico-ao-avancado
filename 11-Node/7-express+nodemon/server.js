const { log } = require('console');
const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE
//"/" this is the name of my route
app.get('/',(req, res) => {
    res.send(`<form action="/" method="POST">
    name: <input typw="text" name="name">
    <button>Send</button>
    </form>`);
});

app.post('/',(req, res) => {
    res.send(`Received the form wqe`);
});

app.get('/contact',(req,res) =>{
    res.send('Thank you for contacting us ')
})

//send my request to door 3000
app.listen(3000,()=>{
console.log('Acess http://localhost:3000');
console.log('Server execult on door 3000')
});