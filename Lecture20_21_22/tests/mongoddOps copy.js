const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

// Database Name
const dbName = 'usman';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    return collection;

    // the following code examples can be pasted here...

    //return 'done.';
}

main()
    .then(async (col) => {

        const data = await col.find({ name: "Usman" }).toArray();
        debugger
    })
    .catch(console.error)
    .finally(() => client.close());