//orga
const express = require('express');
const app = express();

//Router
const router = require('./routes/router');
app.use('/', router);

const routerUsers = require('./routes/routerUsers');
app.use('/users/', routerUsers);

//setup
app.set("view engine", "ejs");

//middleware
app.use(express.static('public'));
app.use(express.json());


//server starten
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
