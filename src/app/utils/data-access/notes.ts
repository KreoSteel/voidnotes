import { prisma } from "@/app/utils/lib/prisma";
import { Note } from "@/generated/prisma/client";
import { requireAuth } from "../lib/auth";

export async function getUserNotes(userId: string, query?: string) {
   await requireAuth();
   return await prisma.note.findMany({
      where: {
         userId: userId,
         ...(query
            ? {
                 OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    { content: { contains: query, mode: "insensitive" } },
                 ],
              }
            : {}),
      },
      orderBy: {
         createdAt: "desc",
      },
   });
}

export async function getNoteById(userId: string, noteId: string) {
   await requireAuth();

   return await prisma.note.findFirst({
      where: { id: noteId, userId },
   });
}

export async function createNote(
   userId: string,
   title: string,
   content?: string
) {
   await requireAuth();

   return await prisma.note.create({
      data: {
         title,
         content: content ?? "",
         userId,
      },
   });
}

export async function updateNote(
   userId: string,
   noteId: string,
   data: Partial<Note>
) {
   await requireAuth();

   return await prisma.note.updateMany({
      where: { id: noteId, userId },
      data,
   });
}

export async function deleteNote(userId: string, noteId: string) {
   await requireAuth();

   return await prisma.note.deleteMany({
      where: { id: noteId, userId },
   });
}
