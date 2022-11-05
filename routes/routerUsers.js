const express = require('express');
let routerUsers = express.Router();

routerUsers.get("/users/", (req, res) => {
    res.send('<h1>hallo user (routerUser.js datei)</h1>');
});

module.exports = routerUsers;