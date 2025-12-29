import z from "zod";

export const signinSchema = new z.object({
    email: z.email().min(0),
    password: z.string().min(6).max(60)
})

export const signupSchema = new z.object({
    username: z.string().min(3).max(12),
    email: z.email().min(0),
    password: z.string().min(6).max(60)
})