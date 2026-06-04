exports.erInnlogget = (req, res, next) => {
    if(!req.session.user) {
        return res.redirect("/login");
    }
    next();
};

exports.erLærer = (req, res, next) => {
    if (!req.session.user || req.session.user.role !== "lærer") {
        return res.status(403).send("Ingen tilgang");
    }

    next();
};

exports.erAdmin = (req, res, next) => {
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.status(403).send("Ingen tilgang");
    }

    next();
};