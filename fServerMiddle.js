const express = require('express');
const app = express();

//req ---> middleware ---> res
app.get('/', (req, res, next) => {
    res.locals.validatedUsers = "Bob";
    console.log("middleware: " + res.locals.validatedUsers );
    next()//ohne next wird der nächste get nicht ausgeführt
});

app.get('/', (req, res, next) => {
    console.log("root: " + res.locals.validatedUsers );
    res.send('<h1> hallo GET home express</h1>')
    //next(); dieses next ist sinnlos, 
    //weil danach nichts passendes mehr ausgeführt werden kann
});

app.get('/users', (req, res, next) => {
    res.send('<h1> hallo GET users express</h1>')
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
