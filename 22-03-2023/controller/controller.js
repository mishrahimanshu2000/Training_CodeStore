const mysql = require('mysql');
const dbconfig = require('../config/dbconfig');



const mysqlConnection = mysql.createConnection(dbconfig);

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

async function showResults(req, res) {
    mysqlConnection.query("SELECT * FROM result", (err, rows) => {
        if (err) {
            console.log(err);
            res.statusCode(404).send(err);
        }           
        console.log(rows);
        res.json(rows);
    });
}

async function postResult(req, res) {
    // console.log(req.file)
    const image = req.body.photo;
    console.log(typeof image);
    
    let query = `INSERT INTO result(Student_Name, Father_Name, Standard, Marks_Obtain, Photo) VALUES ('${req.body.fullName}', '${req.body.fatherName}', ${req.body.standard}, ${req.body.marks}, '${req.body.photo}' )`;
    mysqlConnection.query(query, (err, result) => {
        if (err) console.error(err);
        res.redirect('/');
    });
}




exports.showResults = showResults;
exports.postResult = postResult;