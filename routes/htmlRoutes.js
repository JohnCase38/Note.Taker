const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");

router.get('/notes', (req, res) => {
    store.getNotes(req.body)
    .then((getAndRenderNotes) => res.fs(getAndRenderNotes))
})