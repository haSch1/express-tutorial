const express = require('express');
let router = express.Router();

router.get("/", (req, res) => {
    res.send('<h1>hallo home (router.js datei)</h1>');
});

module.exports = router;