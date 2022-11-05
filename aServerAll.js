const express = require('express');
const app = express();

//egal welche url oder pfad ich als request sende bekomme ich folgenden respond
app.all('*', (req, res) => {
    res.send('<h1 style="background:green;"> hallo express</h1>');
});


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
