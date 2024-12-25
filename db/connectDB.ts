import mongoose from "mongoose";

export const connectDB = async () => {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Database_Url is not defined in the .env file");
  }
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB")
  } catch(error) {
    console.log(error)
    throw error ;
  }
};
