const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://swaroop:<password>@swaroop.nijfg.mongodb.net/?retryWrites=true&w=majority&appName=Swaroop`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Specify the database and collection
    const db = client.db('E-commerce');
    const collection = db.collection('products');

    // Example operation: Find all documents in the collection
    const products = await collection.find({}).toArray();
    console.log("Products in the collection:", products);

    // // Example operation: Insert a new document
    // const newProduct = {
    //   name: "New Product",
    //   price: 29.99,
    //   category: "Electronics"
    // };
    // const insertResult = await collection.insertOne(newProduct);
    // console.log("Inserted document:", insertResult.insertedId);

    // // Example operation: Update a document
    // const updateResult = await collection.updateOne(
    //   { name: "New Product" },
    //   { $set: { price: 24.99 } }
    // );
    // console.log("Updated document count:", updateResult.modifiedCount);

    // // Example operation: Delete a document
    // const deleteResult = await collection.deleteOne({ name: "New Product" });
    // console.log("Deleted document count:", deleteResult.deletedCount);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
