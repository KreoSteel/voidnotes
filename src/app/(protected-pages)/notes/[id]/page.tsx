import { getNoteById } from "@/app/utils/data-access/notes";
import EditNoteForm from "@/components/notes/EditNoteForm";
import { requireAuth } from "@/app/utils/auth";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function NotePage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const user = await requireAuth();
   const { id } = await params;
   const note = await getNoteById(user.id, id);

   if (!note) {
      return <div>Note not found</div>;
   }
   return (
      <div>
         <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-6">
               <Link href="/" className="hover:text-accent">
                  <ArrowLeftIcon />
               </Link>
               <h3>{note.title}</h3>
            </div>
         </div>
         <Separator />
         <EditNoteForm note={note} />
      </div>
   );
}
