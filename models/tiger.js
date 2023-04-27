const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
tail: String,
color: String,
weight: {
   type: Number,
   min: [100, 'weight must be more than 100 pounds'],
   max: 20000
}
})
module.exports = mongoose.model("Tiger",
tigerSchema)