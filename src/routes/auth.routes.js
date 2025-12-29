import { Router } from "express";
import validBodyRequest from "../middlewares/validBodyRequest.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { createUser, login } from "../controllers/user.controller.js";

const authRoutes = Router()
authRoutes.post("/signup", validBodyRequest(signupSchema), createUser)
authRoutes.post("/signin", validBodyRequest(signinSchema), login)

export default authRoutes