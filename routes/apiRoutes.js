const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");

router.get('/notes', (req, res) => {
    store.getNotes(req.body)
    .then((note) => res.json(note))
})

router.post('/notes', (req, res) => {
    store.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500),json(err))
})

router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch((err) => res.status(500).json(err))
})

module.exports = router;

