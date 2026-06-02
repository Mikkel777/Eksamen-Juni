const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,

    category: {
        type: String,
        enum: ["Lav", "Medium", "Høy", "Kritisk"]
    },

    status: {
        type: String,
        enum: ["Åpen", "Pågår", "Lukket"],
        default: "Åpen"
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Ticket", ticketSchema);