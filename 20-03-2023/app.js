const express = require("express");
const path = require("path");
const app = express();
const router = require('./routes/routes')
const { MongoClient, ObjectId } = require('mongodb');

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use('/', router);

const uri = "mongodb://127.0.0.1:27017/Restaurant";
const client = new MongoClient(uri);

connection();

async function connection() {
    await client.connect();
    await app.listen(3000, (req, res) => {
        console.log('server running at 3000')
    });
}