import { z } from "zod";

export const formNoteSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().min(1, { message: "Content is required" }),
})

export type FormNoteSchema = z.infer<typeof formNoteSchema>;