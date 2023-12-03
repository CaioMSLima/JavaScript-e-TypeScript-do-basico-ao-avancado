    exports.initialPage = (req, res)=>{
    //render the index.ejs
    console.log("Responding to the customer");
    res.render('index');
    
}

exports.treatPost =(req, res) =>{
    res.send(req.body);
}