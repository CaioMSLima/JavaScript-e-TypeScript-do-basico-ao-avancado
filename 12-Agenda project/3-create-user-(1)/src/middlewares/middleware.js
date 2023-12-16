exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');

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