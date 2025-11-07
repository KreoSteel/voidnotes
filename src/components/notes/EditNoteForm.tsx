"use client";
import { useActionState } from "react";
import { updateNoteAction } from "@/app/actions/notes";
import { Note } from "@/generated/prisma/client";

export default function EditNoteForm({ note }: { note: Note }) {
    const [state, formAction] = useActionState(updateNoteAction, null)

   return (
      <form id="create-note-form" action={formAction} className="mt-10 flex flex-col items-center justify-center gap-10">
        {state?.error && (
            <p className="text-destructive text-sm mb-4 text-center">{state.error}</p>
        )}
        <input type="hidden" name="id" value={note.id} />
         <input
            defaultValue={note.title}
            name="title"
            type="text"
            placeholder="Note title..."
            className="w-1/2 focus:outline-none focus:ring-0 focus:border-b border-b h-10"
         />
         <textarea
            defaultValue={note.content ?? ""}
            name="content"
            placeholder="Start typing your note..."
            className="w-1/2 focus:outline-none focus:ring-0 focus:border-b border-b h-[calc(100vh-25rem)] overflow-y-auto  resize-none max-w-1/2"
         />
      </form>
   );
}
