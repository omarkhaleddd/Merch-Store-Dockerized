import mongoose from "mongoose";

async function connectToDatabase() {
  console.log("where r u");
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://product_db:27017/product_db", {
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
}

// Call the function to connect to MongoDB
connectToDatabase();

// Export the Mongoose connection object
export default mongoose.connection;
