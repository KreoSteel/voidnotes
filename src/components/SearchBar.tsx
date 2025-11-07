"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <Input type="text" placeholder="Search" className="pl-10" />
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-foreground-muted"/>
    </div>
  );
}