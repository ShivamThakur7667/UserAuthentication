import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conncted to database successfully");
    } catch (error) {
        console.log("Error connection to database", error);
    }
}

export default connectDB;