const User = require("../models/User");

exports.dashboard = async (req, res) => {
    try {
        const brukere = await User.find();

        res.render("admin/dashboard", {
            brukere
        });
    } catch (error) {
        console.log(error);
        res.send("Kunne ikke hente brukere");
    }
};

exports.giLærerRolle = async (req, res) => {
    console.log("giLærerRolle kjører");
    try {
        await User.findByIdAndUpdate(
            req.params.id,
            {role: "lærer"}
        );
        res.redirect("/admin");
    } catch (error) {
        console.log(error);
        res.send("Kunne ikke oppdatere rolle");
    }
};
