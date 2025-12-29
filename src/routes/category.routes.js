import Router from "express";

import validBodyRequest from "../middlewares/validBodyRequest.js";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category.controller.js";
import { createCategorySchema, updateCategorySchema } from "../schemas/category.schema.js";

const categoryRoutes = Router();

categoryRoutes.post("/", validBodyRequest(createCategorySchema), createCategory);
categoryRoutes.get("/", getCategories);
categoryRoutes.get("/:id", getCategory);
categoryRoutes.patch(
    "/:id",
    validBodyRequest(updateCategorySchema),
    updateCategory
);
categoryRoutes.delete("/:id", deleteCategory);

export default categoryRoutes;
