const express = require('express');
const path = require('path')
const bodyparser = require('body-parser');
const routes = require('./routes/routes');
const fileUpload = require('express-fileupload');


var app = express();


//Configuring express server

app.use(express.urlencoded({extended:true}));
// app.use(bodyparser.json());
app.use(fileUpload());


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// app.post('/postresult', (req, res) => {
//     if(req.files){
//         console.log(req.files);
//     }
//     console.log(req.files);
// })

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))
