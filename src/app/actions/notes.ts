"use server";
import { formNoteSchema } from "../utils/ZODschemas/notes";
import {
   createNote,
   deleteNote,
   getUserNotes,
   updateNote,
} from "../utils/data-access/notes";
import { requireAuth } from "../utils/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUserNotesAction(query?: string) {
   const user = await requireAuth();

   try {
      const notes = await getUserNotes(user.id, query);
      return { success: true, notes };
   } catch (error) {
      console.error(error);
      if (error instanceof Error) {
         return { error: error.message };
      }
      return { error: "Failed to get notes" };
   }
}

export async function createNoteAction(
   prevState: { error: string } | null,
   formData: FormData
) {
   const user = await requireAuth();

   try {
      const parsed = formNoteSchema.safeParse({
         title: formData.get("title") as string,
         content: formData.get("content") as string,
      });
      if (!parsed.success) {
         return { error: parsed.error.message };
      }
      await createNote(user.id, parsed.data.title, parsed.data.content);
      revalidatePath("/");
      redirect("/");
   } catch (error) {
      console.error(error);
      if (error && typeof error === "object" && "digest" in error) {
         throw error
      }
      if (error instanceof Error) {
         return { error: error.message };
      }
      return { error: "Failed to create note" };
   }
}

export async function updateNoteAction(
   prevState: { error: string } | null,
   formData: FormData
) {
   const user = await requireAuth();
   const noteId = formData.get("id") as string;
   if (!noteId) {
      return { error: "Note ID is required" };
   }
   try {
      const parsed = formNoteSchema.safeParse({
         title: formData.get("title") as string,
         content: formData.get("content") as string,
      });

      if (!parsed.success) {
         return { error: parsed.error.message };
      }

      const updatedNote = await updateNote(user.id, noteId, {
         title: parsed.data.title,
         content: parsed.data.content,
      });
      if (!updatedNote) {
         return { error: "Failed to update note" };
      }
      revalidatePath("/");
      revalidatePath(`/notes/${noteId}`);
      redirect("/");
   } catch (error) {
      console.error(error);
      if (error && typeof error === "object" && "digest" in error) {
         throw error;
      }
      if (error instanceof Error) {
         return { error: error.message };
      }
      return { error: "Failed to update note" };
   }
}


export async function deleteNoteAction(
   prevState: { error: string } | null,
   formData: FormData
) {
    const user = await requireAuth();
    const noteId = formData.get("id") as string;
    if (!noteId) {
        return { error: "Note ID is required" };
    }
    try {
        await deleteNote(user.id, noteId);
        revalidatePath("/");
        revalidatePath(`/notes/${noteId}`);
        redirect("/");
    } catch (error) {
        console.error(error);
        if (error && typeof error === "object" && "digest" in error) {
            throw error;
        }
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "Failed to delete note" };
    }
}