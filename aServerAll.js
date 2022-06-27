const express = require('express');
const app = express();

app.all('*', (req, res) => {
    //express übernimmt header usw. wir kümmrn uns nur um den inhalt
    console.log(res);
    res.send('<h1> hallo express</h1>')
    //console.log(res);
    
});

//req
//das war reinkommt. von wem. welcher broswser. welche ip adresse

//res
//das was rausgeht. was ich abgeben möchte.


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
