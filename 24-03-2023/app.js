const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');



const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())


app.use('/user',routes)



app.listen(3000, ()=>{
    console.log("Running server on port 3000");
})