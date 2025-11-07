import { prisma } from "@/app/utils/prisma";
import { Note } from "@/generated/prisma/client";

export async function getUserNotes(userId: string) {
   return await prisma.note.findMany({
      where: {
         userId: userId,
      },
      orderBy: {
         createdAt: "desc",
      },
   });
}

export async function getNoteById(userId: string, noteId: string) {
   return await prisma.note.findFirst({
      where: { id: noteId, userId },
   });
}

export async function createNote(
   userId: string,
   title: string,
   content?: string
) {
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
   return await prisma.note.updateMany({
      where: { id: noteId, userId },
      data,
   });
}

export async function deleteNote(userId: string, noteId: string) {
   return await prisma.note.deleteMany({
      where: { id: noteId, userId },
   });
}
