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

// delete an entry /entries/:id
const deleteEntry = (req, res) => {
  const entryId = req.params.id;

  Entry.findByIdAndDelete(entryId)
    .then((deletedEntry) => {
      if (!deletedEntry) {
        return res.status(404).send("Entry not found");
      }
      res.status(200).send("Entry deleted successfully");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};


module.exports = { getEntries, createEntry, deleteEntry };
