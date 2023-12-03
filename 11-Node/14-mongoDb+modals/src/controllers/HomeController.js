const HomeModel = require('../models/HomeModel');

HomeModel.create({
    tile:'Um tile text',
    description: 'One description'
}).then(data => console.log(data)).catch(e => console.log(e));

    exports.initialPage = (req, res)=>{
    //render the index.ejs
    console.log("Responding to the customer");
    res.render('index');
    
}

exports.treatPost =(req, res) =>{
    res.send(req.body);
}