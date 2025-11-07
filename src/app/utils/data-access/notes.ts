import { prisma } from "@/app/utils/prisma";
import { Note } from "@/generated/prisma/client";

export async function getUserNotes(userId: string) {
   const notes = await prisma.note.findMany({
      where: {
         userId: userId,
      },
      orderBy: {
         createdAt: "desc",
      },
   });
   return notes;
}

export async function getNoteById(userId: string, noteId: string) {
   const note = await prisma.note.findUnique({
      where: { id: noteId, userId },
   });
   return note;
}

export async function createNote(
   userId: string,
   title: string,
   content?: string
) {
   const notes = await prisma.note.create({
      data: {
         title: title,
         content: content ?? "",
         userId: userId,
      },
   });
   return notes;
}

export async function updateNote(
   userId: string,
   noteId: string,
   data: Partial<Note>
) {
   const notes = await prisma.note.update({
      where: { id: noteId, userId },
      data: data,
   });
   return notes;
}

export async function deleteNote(userId: string, noteId: string) {
   const notes = await prisma.note.delete({
      where: { id: noteId, userId },
   });
   return notes;
}
