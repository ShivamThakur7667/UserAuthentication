import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;