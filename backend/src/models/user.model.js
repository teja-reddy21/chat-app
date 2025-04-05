import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    age: {
        type: Number,
        required: false,
        default: null
    },
    color: {
        type: String,
        required: true,
        default: "red"
    }
},
{timestamps: true}
);
const User = mongoose.model("User", userSchema);

export default User;