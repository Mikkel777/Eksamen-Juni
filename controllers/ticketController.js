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
        res.redirect("/saker");
    } catch (error) {
        console.log(error);
        res.send("Feil ved opretting av saken");
    }
};

exports.visAlleSaker = async (req, res) => {
    try {
        const saker = await Ticket.find();

        res.render("saker/alle", {
            saker
        });
    } catch (error) {
        console.log(error);
        res.send("Kunne ikke hente alle saker");
    }
};