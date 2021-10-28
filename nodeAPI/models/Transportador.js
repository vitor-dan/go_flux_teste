const mongoose = require("mongoose");

const TransportadorSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    doc: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    },
    site: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Transportadores", TransportadorSchema);