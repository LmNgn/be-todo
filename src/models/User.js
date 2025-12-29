import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: false, versionKey: false })
const User = mongoose.model("User", userSchema)
export default User;