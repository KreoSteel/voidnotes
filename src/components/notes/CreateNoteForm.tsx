"use client";
import { useActionState } from "react";
import { createNoteAction } from "@/app/actions/notes";
import { Button } from "../ui/button";
import { SaveIcon } from "lucide-react";

export default function CreateNoteForm() {
    const [state, formAction, isPending] = useActionState(createNoteAction, null)

    return (
        <form action={formAction} className="mt-10 flex flex-col items-center justify-center gap-10">
            {state && "error" in state && <p className="text-destructive text-sm mb-4 text-center">{state.error}</p>}
         <input
            name="title"
            type="text"
            placeholder="Note title..."
            className="w-1/2 focus:outline-none focus:ring-0 focus:border-b border-b h-10"
         />
         <textarea
            name="content"
            placeholder="Start typing your note..."
            className="w-1/2 focus:outline-none focus:ring-0 focus:border-b border-b h-[calc(100vh-25rem)] overflow-y-auto  resize-none max-w-1/2"
         />
         <Button type="submit" variant="default" disabled={isPending}>
            <SaveIcon />
            {isPending ? "Saving..." : "Save Changes"}
         </Button>
      </form>
   );
}
