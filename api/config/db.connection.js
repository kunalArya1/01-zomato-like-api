import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error(
        "MONGO_URI is not defined. Please set it in your environment variables."
      );
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Susscefully!");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose Connected to the Database!");
    });

    mongoose.connection.on("error", () => {
      console.log("Mongoose Connection Error!");
    });
  } catch (error) {
    console.error("Error While Connecting to database");
    process.exit(1);
  }
};
