"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function SearchBar() {
   const searchParams = useSearchParams();
   const { replace } = useRouter();
   const pathname = usePathname();

   const handleSearch = (term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set("query", term);
      } else {
         params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
   };

   return (
      <div className="relative">
         <Input
            type="text"
            placeholder="Search"
            className="pl-10"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
         />
         <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-foreground-muted" />
      </div>
   );
}
