const mongoose = require("mongoose");

const LanceSchema = mongoose.Schema({
    id_provider: {
        type: Number,
        require: true
    },
    id_offer: {
        type: Number,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model("Lances", LanceSchema);