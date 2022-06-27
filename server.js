const express = require('express');
const app = express();

app.all('*', (req, res) => {
    res.send('<h1> hallo express</h1>')
});


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
