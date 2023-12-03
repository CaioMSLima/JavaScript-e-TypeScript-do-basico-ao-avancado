
const HomeModel = require('../models/HomeModel');

HomeModel.create({
    tile:'Um tile text',
    description: 'One description'
}).then(data => console.log(data)).catch(e => console.log(e));

    exports.initialPage = (req, res)=>{
    //render the index.ejs
req.session.user = {name: 'Caio', Logged: 'true'}
req.flash('info','My first day use this');
req.flash('error','This not function');
req.flash('success','The other is false')
console.log(req.flash('error'), req.flash('success'));

    console.log("Responding to the customer");
    res.render('index');
    
}

exports.treatPost =(req, res) =>{
    res.send(req.body);
}