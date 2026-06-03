const express = require("express");
const routes = require("./router/routes");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Mongodb er koblet til");
})
.catch((err) => {
    console.log("Databasefeil", err);
});

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

//sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use("/", routes);

app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});

app.listen(3000, ()=> {
    console.log("Website running at port 3000");
});
