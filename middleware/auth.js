exports.erInnlogget = (req, res, next) => {
    if(!req.sesison.user) {
        return res.redirect("/login");
    }
    next();
};