import z from "zod";

export const createCategorySchema = new z.object({
    title: z.string().min(0).max(253)
})

export const updateCategorySchema = new z.object({
    title: z.string().min(0).max(253).optional()
})