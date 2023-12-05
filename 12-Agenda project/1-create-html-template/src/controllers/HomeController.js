
const HomeModel = require('../models/HomeModel');

HomeModel.create({
    tile:'Um tile text',
    description: 'One description'
}).then(data => console.log(data)).catch(e => console.log(e));

    exports.initialPage = (req, res)=>{
    //render the index.ejs
req.session.user = {name: 'Caio', Logged: 'true'}
    res.render('index',{
        tile:'this is a tile',
        numbers:[12,45,89,12,455]
    });
    return
    
}

exports.treatPost =(req, res) =>{
    res.send(req.body);
    return

}