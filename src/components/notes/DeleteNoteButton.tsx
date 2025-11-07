"use client";
import { useActionState } from "react";
import { deleteNoteAction } from "@/app/actions/notes";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

export default function DeleteNoteButton({ noteId }: { noteId: string }) {
   const [state, formAction, isPending] = useActionState(deleteNoteAction, null);
   const [open, setOpen] = useState(false);

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant="destructive">
               <TrashIcon />
               Delete
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Delete Note</DialogTitle>
               <DialogDescription>
                  Are you sure you want to delete this note? This action cannot be undone.
               </DialogDescription>
            </DialogHeader>
            {state?.error && (
               <p className="text-destructive text-sm">{state.error}</p>
            )}
            <form action={formAction}>
               <input type="hidden" name="id" value={noteId} />
               <DialogFooter>
                  <Button
                     type="button"
                     variant="outline"
                     onClick={() => setOpen(false)}
                     disabled={isPending}
                  >
                     Cancel
                  </Button>
                  <Button
                     type="submit"
                     variant="destructive"
                     disabled={isPending}
                  >
                     {isPending ? "Deleting..." : "Delete Note"}
                  </Button>
               </DialogFooter>
            </form>
         </DialogContent>
      </Dialog>
   );
}

