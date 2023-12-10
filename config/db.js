const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connected !");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
module.exports = connectToDatabase;
