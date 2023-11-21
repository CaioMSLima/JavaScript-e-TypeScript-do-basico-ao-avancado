exports.initialPage = (req, res)=>{
    res.send(`<form action="/" method="POST">
    name of client: <input typw="text" name="name"> <br><br>
    Account number  <input typw="text" name="accountNumber">
    <button>Send</button>
    </form>`);
}

exports.treatPost =(req, res) =>{
    res.send(`Received that:name = ${req.body.name} and account number = ${req.body.accountNumber}`);
}