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
    try{
        await client.connect();
        const myCol = await client.db('student').collection('check');
        const data = await myCol.find({});
        // await console.log(data +"\n" + typeof data)
        await data.forEach(element => {
            console.log(element);
        });
    }
    finally{
        client.close();
    }


}
run().catch(console.dir)