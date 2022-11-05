//orga
const express = require('express');
const app = express();

const helmet = require('helmet');//security maßnahme

function authenticateUser(req, res, next) {
    res.locals.validatedUsers = "Bob";//unter res.locals kann man beliebige variablen erfinden unde verwednen
    console.log("middleware: " + res.locals.validatedUsers );
    next();
}

function rootSite(req, res, next) {
    console.log("root: " + res.locals.validatedUsers );
    res.send('<h1> hallo GET home express</h1>');
    next();
}

//setup
app.set("view engine", "ejs");

//middleware
app.use('/', authenticateUser);
app.use(express.static('public'));
app.use(express.json());

//responds
app.get('/',(req,res, next) => {
    res.render('indexUser', {
        beliebigeOptionen: 12345
    });
}); 

app.get('/video/',(req,res, next) => {
    res.render('video');
}); 

//server starten
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
