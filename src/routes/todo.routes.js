import Router from "express";

import validBodyRequest from "../middlewares/validBodyRequest.js";
import { todoCreateSchema, todoUpdateSchema } from "../schemas/todo.schema.js";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.controller.js";
import auth from "../middlewares/auth.js";

const todoRoutes = Router();

todoRoutes.post("/", validBodyRequest(todoCreateSchema), createTodo);
todoRoutes.get("/", getTodos);
todoRoutes.get("/:id", getTodo);
todoRoutes.patch(
    "/:id",
    validBodyRequest(todoUpdateSchema),
    updateTodo
);
todoRoutes.delete("/:id", deleteTodo);

export default todoRoutes;
