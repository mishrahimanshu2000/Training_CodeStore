const express = require('express');
const path = require('path')
const bodyparser = require('body-parser');
const routes = require('./routes/routes')
var app = express();


//Configuring express server

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))

// app.get('/', (req, res) => {
//     mysqlConnection.query('SELECT * FROM bookings', (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });

