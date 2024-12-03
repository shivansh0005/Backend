const { MongoClient } = require('mongodb');

const url = "mongodb+srv://namasteshivansh:HEU2oE9koUbKSUxM@namastenode.cxr8b.mongodb.net/";
const client = new MongoClient(url);
const dbName = 'Helloworld';
async function main() {
   
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');
//     const data={
        
//     firstname:
//       "akash",
// LastName:
// "Singh",

// city:
// "Varanasi"
//     };

//     const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);
const updateResult = await collection.updateOne(
    { firstname: "akash" },           // Filter: Find document where firstname is "akash"
    { $set: { LastName: "Sharma" } }  // Update: Change LastName to "Sharma"
);
console.log('Updated document =>', updateResult);
const deleteResult = await collection.deleteMany({ firstname: "akash" });
console.log('Deleted documents =>', deleteResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  
