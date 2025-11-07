import { SearchBar } from "@/components/SearchBar";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NotesCard from "@/components/cards/NotesCard";
import { Suspense } from "react";
import { requireAuth } from "@/app/utils/auth";

export default async function Dashboard() {
   await requireAuth();

   return (
      <div>
         <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center justify-between">
               <h2>Your Notes</h2>
               <Button>
                  <PlusIcon />
                  <Link href="/notes/create-note">New Note</Link>
               </Button>
            </div>
            <span>
               <SearchBar />
            </span>
            <Suspense fallback={<div>Loading...</div>}>
               <NotesCard />
            </Suspense>
         </div>
      </div>
   );
}
