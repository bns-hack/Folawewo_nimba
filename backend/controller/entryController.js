const Entry = require("../model/entryModel");

// get all entries /entries
const getEntries = (req, res) => {
  Entry.find({})
    .sort({ date: "desc" })
    .exec()
    .then((entries) => {
      res.status(200).send(entries);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// post an entry /entries
const createEntry = (req, res) => {
  const newEntry = new Entry(req.body);

  newEntry
    .save()
    .then((entry) => {
      res.status(201).send(entry);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = { getEntries, createEntry };

