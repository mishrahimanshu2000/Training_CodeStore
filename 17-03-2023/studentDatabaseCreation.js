const { MongoClient, ServerApiVersion } = require("mongodb");

const url = 'mongodb://127.0.0.1:27017/student';
// mongodb://localhost:27017

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        //
        await client.db("student").createCollection("check");
        
        const data = await myCol.find({})
        await data.forEach(element => {
            console.log(element)
        });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// run().catch(console.dir);

// Mongo.connect(url, (err, db) => {
//     console.log('inconnect');
//     if (err) throw err;
//     console.log("Created");
//     var dbo = db.db("student");
//     dbo.createCollection("customers", function (err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });
// mongodb://localhost:27017/

module.exports = {
    'client' : client
}