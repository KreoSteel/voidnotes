import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import CreateNoteForm from "@/components/notes/CreateNoteForm";

export default function NewNotePage() {
   return (
      <div>
         <div className="flex items-center justify-between mb-7">
            <div className="flex justify-between w-full">
               <div className="flex items-center gap-6">
                  <Link href="/" className="hover:text-accent">
                     <ArrowLeftIcon />
                  </Link>
                  <h3>New Note</h3>
               </div>
            </div>
         </div>
         <Separator />
         <CreateNoteForm />
      </div>
   );
}
