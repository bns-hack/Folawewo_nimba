const mongoose = require("mongoose");

const nimbaSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", nimbaSchema);

module.exports = Entry;
