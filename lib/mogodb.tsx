// import mongoose from "mongoose";

//  export const connectMongoDB = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//     console.log('Connected to MongoDB');
//     } catch (error) {
//         console.log('Error connecting to MongoDB', error)
//     }
//  }
import mongoose from "mongoose";

// Provide a default value for MONGODB_URL if it's not defined
const MONGODB_URL = process.env.MONGODB_URL || "default_mongodb_url";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log("Error connecting to MongoDB", error);
  }
};
