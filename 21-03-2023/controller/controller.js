const mysql = require('mysql');
const dbconfig = require('../config/dbconfig')

const mysqlConnection = mysql.createConnection(dbconfig);


mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});


const confirmBooking = async(req, res) => {
    const entry = JSON.parse(req.params.entry);
    let query = `INSERT INTO bookings(personName, bookingDate, bookingTime, tableNumber, personCount) VALUES ( '${entry.userName}' , '${entry.date}', '${entry.time}', 'Table-${entry.table}' , ${entry.persons})`;

    mysqlConnection.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            res.send(err)
        }
        else{
            res.send(rows)
        }
    })
}

async function deleteBooking(req, res){
    mysqlConnection.query(`DELETE FROM bookings WHERE booking_id = '${req.params.booking}'` , (err , rows) => {
        if(err){
            console.log(err);
            res.send(err)
        }
        else{
            res.send(rows)
        }
    })
}

async function bookTable(req, res){
    mysqlConnection.query(`SELECT tableNumber FROM bookings WHERE bookingDate = "${req.params.date}" AND bookingTime = "${req.params.time}"`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}

async function showDetails(req, res){
    mysqlConnection.query(`SELECT * FROM bookings WHERE personName = "${req.params.userName}"`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}




exports.showDetails =showDetails;
exports.bookTable =bookTable;
exports.deleteBooking =deleteBooking;
exports.confirmBooking = confirmBooking