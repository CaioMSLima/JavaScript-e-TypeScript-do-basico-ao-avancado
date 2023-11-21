const { log } = require('console');
const express = require('express');
const app = express();

//you need this to take the value you send in the post
app.use(express.urlencoded({extended: true}))


app.get('/',(req, res) => {
    res.send(`<form action="/" method="POST">
    name of client: <input typw="text" name="name"> <br><br>
    Account number  <input typw="text" name="accountNumber">
    <button>Send</button>
    </form>`);
});

app.get('/test/:idUser?/:optionParans?',(req,res) =>{
  
    let variable

      ///:idUser thsi value put in the url and the req.params get its in back
      //http://localhost:3000/test/123/tree
    if(req.params.idUser) variable = req.params

      //Take the value of query String
    //http://localhost:3000/test?name=Caio&lastName=Matos&Age=22
    else if (req.query.name) variable = req.query

    else variable = 'Hi'

    res.send(variable)
    console.log(variable);
})

app.post('/',(req, res) => {
    //Get value that sended in the post
    console.log(req.body);
    res.send(`Received that:name = ${req.body.name} and account number = ${req.body.accountNumber}`);
});


//send my request to door 3000
app.listen(3000,()=>{
console.log('Acess http://localhost:3000');
console.log('Server execult on door 3000')
});