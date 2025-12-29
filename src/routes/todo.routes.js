import Router from "express";

import validBodyRequest from "../middlewares/validBodyRequest.js";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category.controller.js";
import { todoCreateSchema, todoUpdateSchema } from "../schemas/todo.schema.js";

const todoRoutes = Router();

todoRoutes.post("/", validBodyRequest(todoCreateSchema), createCategory);
todoRoutes.get("/", getCategories);
todoRoutes.get("/:id", getCategory);
todoRoutes.patch(
    "/:id",
    validBodyRequest(todoUpdateSchema),
    updateCategory
);
todoRoutes.delete("/:id", deleteCategory);

export default todoRoutes;
