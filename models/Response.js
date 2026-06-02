const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    message: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Response", responseSchema);