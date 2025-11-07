import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription,
   CardFooter,
} from "@/components/ui/card";
import { getUserNotesAction } from "@/app/actions/notes";
import { ClockIcon } from "lucide-react";
import Link from "next/link";

export default async function NotesCard() {
   const { success, notes, error } = await getUserNotesAction();
   if (!success) {
      return <div>Error: {error}</div>;
   }
   if (!notes || notes.length === 0) {
      return (
         <div className="text-center text-foreground-muted">No notes found</div>
      );
   }
   return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {notes.map((note) => (
        <Link href={`/notes/${note.id}`} key={note.id}>
       <Card key={note.id} className="h-full flex flex-col min-h-44">
          <CardHeader>
             <CardTitle>{note.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
             <CardDescription>{note.content}</CardDescription>
          </CardContent>
          <CardFooter className="mt-auto flex items-center gap-2 text-foreground-muted">
             <ClockIcon size={20} />
             <span className="text-sm">
                {note.createdAt.toLocaleDateString()}
             </span>
          </CardFooter>
       </Card>
       </Link>
    ))}
 </div>
   );
}
