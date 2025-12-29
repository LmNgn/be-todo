import Router from "express";
import productRoutes from "./product.routes.js";
import categoryRoutes from "./category.routes.js";
import todoRoutes from "./todo.routes.js";
import authRoutes from "./auth.routes.js";
const router = Router();
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/todos", todoRoutes);

export default router;
