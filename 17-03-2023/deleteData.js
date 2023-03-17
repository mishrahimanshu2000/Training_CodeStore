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
async function run(){
    await client.connect();

    try{
        const myCol = client.db('student').collection('check');
        const res = await myCol.deleteOne({name : 'Golu'});
        console.log(res.deletedCount);
    }
    finally{
        client.close();
    }
}

run().catch(console.dir)