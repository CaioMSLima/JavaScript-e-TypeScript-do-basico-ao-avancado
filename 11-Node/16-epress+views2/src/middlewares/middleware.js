exports.middlewareGlobal = (req, res, next) => {
    res.locals.oneVariableLocal = 'This is value of variable local'
    next()
}