const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    username: String,
    action: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    ipAddress: String
});

module.exports = mongoose.model("AuthLog", authSchema);