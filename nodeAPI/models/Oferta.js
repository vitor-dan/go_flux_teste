const mongoose = require("mongoose");

const OfertaSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    id_customer: {
        type: Number,
        require: true
    },
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    initial_value: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    amount_type: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Ofertas", OfertaSchema);