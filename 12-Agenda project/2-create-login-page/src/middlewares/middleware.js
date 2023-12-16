exports.middlewareGlobal = (req, res, next) => {
    res.locals.oneVariableLocal = 'This is value of variable local'
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