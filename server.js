const path = require('path');
const fs = require('fs');


const express = require('express');
const app = express();

// Use ejs

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/frontend'));

app.get('/', (req, res) => {
    res.render('index', { title: 'My EJS App', message: 'Hi, ejs!' });
  });
  
// app.get('/:filename?',function(req, res) {

//     let file_name = 'home';

//     if(!fs.existsSync(path.join(__dirname, 'frontend/${req.params.filename}.html'))) {
//         file_name = 'notfound';
//     } 

//     if(!req.params.filename) {
//         file_name = 'home';
//     }

//     res.sendFile('${path.join(__dirname, 'frontend/${file_name}.html')}');
// });

// frontend/${file_name}.html

// TO DO:
// app.post();
// app.get();
// app.all();



app.listen(3000, function() {
    console.log('The server is running on http://localhost:3000');
})

// res.send();
// res.sendFile();
// res.sendjson();