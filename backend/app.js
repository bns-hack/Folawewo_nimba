const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const entryController = require("./controller/entryController");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/entries", entryController.getEntries);
app.post("/entries", entryController.createEntry);
app.delete("/entries/:id", entryController.deleteEntry);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((error) => {
    console.error("Error connecting to Database:", error);
  });
mongoose.Promise = global.Promise;

module.exports = app;
