const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))

//read
app.get('/', (req, res) => {
    //unter __dirname steht der gesamt pfad drin
    //mit + wird dann noch die datei, die angezeigt werden soll genannt
    //console.log(path.join(__dirname) + '/index.html')
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/users', (req, res) => {
    res.send('<h1> hallo GET users express</h1>')
});

app.get('/users/haSch', (req, res) => {
    res.send('<h1> hallo GET users haSch express</h1>')
});

//create
app.post('*', (req, res) => {
    res.send('<h1> hallo POST express</h1>')
});

//update
app.put('*', (req, res) => {
    res.send('<h1> hallo PUT express</h1>')
    
});

//delete
app.delete('*', (req, res) => {
    res.send('<h1> hallo DELETE express</h1>')
});


app.listen(3000, () => {
    console.log("server listening on port 3000");
});
    
