exports.initialPage = (req, res)=>{
    //render the index.ejs
    res.render('index');
}

exports.treatPost =(req, res) =>{
    res.send(`Received that:name = ${req.body.name} and account number = ${req.body.accountNumber}`);
}