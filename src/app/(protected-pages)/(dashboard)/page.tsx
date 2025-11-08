import { SearchBar } from "@/components/ui/SearchBar";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NotesCard from "@/components/cards/NotesCard";
import { Suspense } from "react";
import { requireAuth } from "@/app/utils/auth";

export default async function Dashboard(props: {
   searchParams?: Promise<{ query?: string }>;
}) {
   const searchParams = await props.searchParams;
   const query = searchParams?.query || "";
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
            <Suspense key={query} fallback={
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                     <div key={i} className="h-44 bg-muted animate-pulse rounded-lg" />
                  ))}
               </div>
            }>
               <NotesCard query={query} />
            </Suspense>
         </div>
      </div>
   );
}
