// Add the following code to your MongoDB connection setup
const mongoose = require("mongoose");
require("dotenv").config();
// password123;
// password123 ?? sharing45;
// AJ1CsynZUF5bhcfg

// tumson100000
// RLB1WGkvAJX0pTl3

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(MONGO_URL, {
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database " + err);
  });

// async function run() {
//   try {
//     // if (mongoose.connection.readyState !== 1) {
//     //   throw new Error("MongoDB is not connected");
//     // }
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(MONGO_URL, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });

//     if (mongoose.connection.readyState !== 1) {
//       throw new Error("MongoDB is not connected");
//     }
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }

// run().catch(console.dir);
