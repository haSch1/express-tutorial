const express = require('express');
const app = express();

//CRUD: create - post, read - get, update - put, delete - delete

//read
app.get('*', (req, res) => {
    console.log(req);
    res.send('<h1> hallo GET express</h1>')  
});

//create
app.post('*', (req, res) => {
    console.log(req);
    res.send('<h1> hallo POST express</h1>')  
});

//update
app.put('*', (req, res) => {
    console.log(req);
    res.send('<h1> hallo PUT express</h1>') 
});

//delete
app.delete('*', (req, res) => {
    console.log(req);
    res.send('<h1> hallo DELETE express</h1>')
});


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
