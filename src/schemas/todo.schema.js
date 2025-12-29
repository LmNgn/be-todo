import z from "zod";


export const todoCreateSchema = new z.object({
    title: z.string().min(3).max(253),
    description: z.string().min(0)
})


export const todoUpdateSchema = new z.object({
    title: z.string().min(3).max(253).optional(),
    description: z.string().min(0).optional()
})