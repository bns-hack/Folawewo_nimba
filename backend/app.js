const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// mongoose.connect('mongodb://localhost/guestbook', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = global.Promise;

const nimbaSchema = new mongoose.Schema({
    name: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Entry = mongoose.model('Entry', nimbaSchema);

app.get('/entries', (req, res) => {
    // get all entries
    Entry.find({})
        .sort({ date: 'desc' })
        .exec((err, entries) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(entries);
            }
        });
});

app.post('/entries', (req, res) => {
    // create a new entry
    const newEntry = new Entry(req.body);

    // Save the entry to the database
    newEntry.save((err, entry) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(entry);
        }
    });
});


module.exports = app;