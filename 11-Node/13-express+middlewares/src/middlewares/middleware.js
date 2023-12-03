exports.middlewareGlobal = (req, res, next) => {

    if (req.body.customer) {
        req.body.customer = req.body.customer.replace('Caio', "Don't use Caio")
        console.log();
        console.log(`I see you post ${req.body.customer}`);
        console.log();
    }
    next()
}