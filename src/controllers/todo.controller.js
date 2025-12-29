import Todo from "../models/Todo.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";

// export const getTodos = handleAsync(async (req, res) => {
//     const { status, priority, keyword } = req.query;

//     let filter = {};

//     if (status) filter.status = status;
//     if (priority) filter.priority = priority;
//     if (keyword) {
//         filter.title = { $regex: keyword, $options: "i" };
//     }

//     const todos = await Todo.find({
//         ...filter,
//         user: req.user.id
//     });

//     if (todos.length === 0) {
//         return createError(res, 404, "No todos found");
//     }

//     return createResponse(res, 200, "Success", todos);
// });
export const getTodos = handleAsync(async (req, res) => {


    const todos = await Todo.find({
    });

    if (todos.length === 0) {
        return createError(res, 404, "No todos found");
    }

    return createResponse(res, 200, "Success", todos);
});


export const getTodo = handleAsync(async (req, res) => {
    const data = await Todo.findById(req.params.id);
    if (!data) {
        return createError(res, 400, "Not found")
    }
    return createResponse(res, 200, "Found it", data)
})

export const createTodo = handleAsync(async (req, res) => {
    const todo = await Todo.create(req.body)
    createResponse(res, 201, "Create successfull", todo)
})

export const updateTodo = handleAsync(async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    createResponse(res, 200, "Update successfull", todo)
})

export const deleteTodo = handleAsync(async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    createResponse(res, 200, "Delete successfull", todo)
})
