const express = require("express");
const path = require("path");
const app = express();
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

const uri = "mongodb://127.0.0.1:27017/Restaurant";
const client = new MongoClient(uri);

connection();

async function connection() {
    await client.connect();
    await app.listen(3000, (req, res) => {
        console.log('server running at 3000')
    });
}

app.get("/showDetails/:userName?", async (req, res) => {
    const data = await client.db('Restaurant').collection('bookedTable').find({ userName: req.params.userName }).toArray();
    let retData = [];
    await data.forEach(element => {
        retData.push(element)
    });
    return res.send( retData );
});

app.get('/book/:date?/:time?', async (req, res) => {
    const data = await client.db('Restaurant').collection('bookedTable').find({date : req.params.date, time : req.params.time}).toArray();
})

app.post("/deleteBooking/:booking?", async (req, res) => {
    const data = await client.db('Restaurant').collection('bookedTable');
    const s = await data.deleteOne({_id : new ObjectId(req.params.booking)});
    console.log(s);
});

app.post("/book/:entry?", async (req, res) => {
    const data = await client.db('Restaurant').collection('bookedTable').insertOne(JSON.parse(req.params.entry));
    console.log(data);
})
