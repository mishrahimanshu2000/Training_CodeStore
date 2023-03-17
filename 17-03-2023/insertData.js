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
// 

async function run(){
    await client.connect();

    const myCol = client.db('student').collection('check');
    try{
        res = await myCol.insertOne({
                name : 'Golu',
                age : 55
            });
            await console.log(res.insertedId);
            res = await myCol.insertOne({
                name : 'Pankaj',
                age : 66
            });
            await console.log(res.insertedId);  
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir)