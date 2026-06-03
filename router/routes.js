const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const ticketController = require("../controllers/ticketController");

router.get("/", (req, res)=> {
    res.render("homepage");
});

router.get("/signup", (req, res)=> {
    res.render("auth/signup");
});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

//authcontroller
router.post("/signup", authController.registerUser);
router.post("/login", authController.loginUser);

//ticketcontroller
router.get("/saker/opprett", ticketController.visSak);
router.post("/saker/opprett", ticketController.opprettSak);

module.exports = router;