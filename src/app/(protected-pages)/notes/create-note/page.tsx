"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";
import Link from "next/link";
import CreateNoteForm from "@/components/notes/CreateNoteForm";
import { useState } from "react";

export default function NewNotePage() {
   const [isPending, setIsPending] = useState(false);


   return (
      <div>
         <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-6">
               <Link href="/" className="hover:text-accent">
                  <ArrowLeftIcon />
               </Link>
               <h3>New Note</h3>
            </div>
            <div className="flex items-center gap-2">
               <Button 
                  type="submit"
                  form="create-note-form"
                  variant="default"
                  disabled={isPending}
               >
                  <SaveIcon />
                  {isPending ? "Saving..." : "Save"}
               </Button>
            </div>
         </div>
         <Separator />
         <CreateNoteForm isPending={isPending}/>
      </div>
   );
}
