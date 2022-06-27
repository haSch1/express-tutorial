//orga
const express = require('express');
const app = express();

//middleware
function authenticateUser(req, res, next) {
    res.locals.validatedUsers = "Bob";
    console.log("middleware: " + res.locals.validatedUsers );
    next();
}

app.use('/users/', authenticateUser);//für middleware use nicht all oder get. alle unterseiten sind dabei. mit all und "*" würde es auch gehen


//responds
app.get('/', (req, res, next) => {
    console.log("root: " + res.locals.validatedUsers );
    res.send('<h1> hallo GET home express</h1>')
});

app.get('/users/', (req, res, next) => {
    res.send('<h1> hallo GET users express</h1>')
});

//server starten
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
