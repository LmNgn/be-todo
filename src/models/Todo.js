import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    },
    status: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: false, versionKey: false })
const Todo = mongoose.model("Todo", todoSchema)

export default Todo