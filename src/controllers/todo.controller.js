import Todo from "../models/Todo";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";

export const getTodos = handleAsync(async (req, res) => {
    const data = await Todo.find();
    if (data.lenght === 0) {
        return createError(res, 400, "Not found")
    }
    return createResponse(res, 200, "Found it", data)
})

export const getTodo = handleAsync(async (req, res) => {
    const data = await Todo.findById(req.params._id);
    if (data.lenght === 0) {
        return createError(res, 400, "Not found")
    }
    return createResponse(res, 200, "Found it", data)
})

export const createTodo = handleAsync(async (req, res) => {
    const todo = await Todo.create(req.body)
    createResponse(res, 201, "Create successfull", todo)
})

export const updateTodo = handleAsync(async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params._id, req.body, { new: true })
    createResponse(res, 201, "Update successfull", todo)
})

export const deleteTodo = handleAsync(async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params._id)
    createResponse(res, 201, "Delete successfull", todo)
})
