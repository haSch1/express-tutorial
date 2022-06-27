//orga
const express = require('express');
const app = express();

const helmet = require('helmet');//security maßnahme
app.use(helmet());//nur installieren. man muss sonst nichts machen
//alles geht durch helmet durch. egal ob get post ...

function authenticateUser(req, res, next) {
    res.locals.validatedUsers = "Bob";
    console.log("middleware: " + res.locals.validatedUsers );
    next();
}

function rootSite(req, res, next) {
    console.log("root: " + res.locals.validatedUsers );
    res.send('<h1> hallo GET home express</h1>')
    next();
}

//middleware
app.use('/users/', authenticateUser);//für middleware use nicht all oder get. alle unterseiten sind dabei. mit all und "*" würde es auch gehen
app.use(express.json());//jetzt wird mir ein json objekt vom body geliefert


//responds
app.get('/',rootSite); 

app.get('/users/', (req, res, next) => {
    res.send('<h1> hallo GET users express</h1>')
});

app.post('/', (req, res, next) => {
    console.log(req.body);//der body ist ohne middleware(express.json()) nicht auslesbar
    console.log(req.body['name']);
    console.log(req.body['password']);
    res.send('<h1> hallo POST root express</h1>')
});

//server starten
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
