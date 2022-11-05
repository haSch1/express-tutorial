const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.params.name);
    console.log();
})

app.get("/nachname/:nname/vorname/:vname", (req, res) => { 
    //const {nname, vname} = req.params;
      
    res.send("nachname " + req.params.nname + " vorname " + req.params.vname +
             " wohnort " +req.query.wohnort + " plz " + req.query.plz); 
 }); 


app.listen(3000, (req, res) =>{
    console.log('gestartet');
})