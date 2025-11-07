import { SearchBar } from "@/components/SearchBar";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
        <h2>Your Notes</h2>
        <Button>
          <PlusIcon />
          New Note
        </Button>
        </div>
        <span>
        <SearchBar />
        </span>
      </div>
    </div>
  )
}