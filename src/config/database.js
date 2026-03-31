import mongoose from "mongoose";
import config from "./config";

async function connectDB() {

    await mongoose.connect(config.MONGO_URL)

    console.log("Connect to DB");

}

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Conncted to database successfully");

//         // Sync indexes to drop old ones and create new ones based on the schema
//         const userModel = mongoose.model("user");
//         await userModel.syncIndexes();
//         console.log("Database indexes synced successfully");
//     } catch (error) {
//         console.log("Error connection to database", error);
//     }
// }

export default connectDB;