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
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    },
    status: {
        type: String,
        enum: ["todo", "doing", "done"],
        default: "todo"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: false, versionKey: false })
const Todo = mongoose.model("Todo", todoSchema)

export default Todo