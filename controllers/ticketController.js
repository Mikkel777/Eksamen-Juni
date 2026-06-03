const Ticket = require("../models/Ticket");

exports.visSak = (req, res) => {
    res.render("saker/opprett");
};

exports.opprettSak = async (req, res) => {
    try {
        console.log(req.body);// log
        await Ticket.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            createdBy: req.body.createdBy
        });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Feil ved opretting av saken");
    }
};
