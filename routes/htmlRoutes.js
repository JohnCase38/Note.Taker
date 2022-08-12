const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((note) => res.fs(note))
    .catch((err) => res.status(500),json(err))
})