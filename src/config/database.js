import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.info("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    connected = true;
    console.log("MongoDb connected.");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
