const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
tail: String,
color: String,
weight: Number
})
module.exports = mongoose.model("Tiger",
tigerSchema)