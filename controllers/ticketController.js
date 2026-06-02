const Ticket = require("../models/Ticket");

exports.visSak = (req, res) => {
    res.render("saker/opprett");
};

exports.opprettSak = async (req, res) => {
    try {
        await Ticket.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            createdBy: req.body.createdBy
        });
        res.redirect("/");
    } catch (erorr) {
        console.log(error);
        res.send("Feil ved opretting av sak");
    }
};
