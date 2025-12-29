import Category from "../models/Category.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";

export const getCategories = handleAsync(async (req, res) => {
    const data = await Category.find();
    if (data.lenght === 0) {
        return createError(res, 400, "Not found")
    }
    return createResponse(res, 200, "Found it", data)
})

export const getCategory = handleAsync(async (req, res) => {
    const data = await Category.findById(req.params._id);
    if (data.lenght === 0) {
        return createError(res, 400, "Not found")
    }
    return createResponse(res, 200, "Found it", data)
})

export const createCategory = handleAsync(async (req, res) => {
    const todo = await Category.create(req.body)
    createResponse(res, 201, "Create successfull", todo)
})

export const updateCategory = handleAsync(async (req, res) => {
    const todo = await Category.findByIdAndUpdate(req.params._id, req.body, { new: true })
    createResponse(res, 201, "Update successfull", todo)
})

export const deleteCategory = handleAsync(async (req, res) => {
    const todo = await Category.findByIdAndDelete(req.params._id)
    createResponse(res, 201, "Delete successfull", todo)
})
