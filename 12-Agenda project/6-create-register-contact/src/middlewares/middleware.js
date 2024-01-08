exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user

    next()
}

exports.checkCrsfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    //pick the crsfToken
    res.locals.csrfToken = req.csrfToken()
    next();
}

exports.loginRequired = (req,res,next) =>{
    if(!req.session.user){
        req.flash('errors', 'You need to do login.');
        req.session.save(function() {
            res.redirect('/login/index');
        })
        return
    }
    next()
}