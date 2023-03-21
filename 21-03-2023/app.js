const express = require('express');
const path = require('path')
const bodyparser = require('body-parser');
const routes = require('./routes/routes')
var app = express();
//Configuring express server

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));


// mysqlConnection = mysql.createConnection(dbconfig);

// mysqlConnection.connect((err) => {
//     if (!err)
//         console.log('Connection Established Successfully');
//     else
//         console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
// });


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

