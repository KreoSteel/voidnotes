"use client";
import {
   Select,
   SelectTrigger,
   SelectValue,
   SelectContent,
   SelectItem,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

export default function Preferences() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      // This is necessary to avoid hydration mismatch with next-themes
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
   }, []);

   return (
      <div className="flex flex-col gap-4 mt-10 border border-border rounded-md bg-surface-hover p-6 w-1/4">
         <div>
            <h2>Preferences</h2>
            <p className="text-foreground-muted">Manage your preferences.</p>
         </div>
         <div className="flex flex-col gap-2">
            <Label htmlFor="theme">Theme</Label>
            {mounted ? (
               <Select value={theme || "system"} onValueChange={setTheme}>
                  <SelectTrigger>
                     <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="light">Light</SelectItem>
                     <SelectItem value="dark">Dark</SelectItem>
                     <SelectItem value="system">System</SelectItem>
                  </SelectContent>
               </Select>
            ) : (
               <div
                  className={cn(
                     "border-input text-muted-foreground flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm h-9 shadow-xs",
                     "dark:bg-input/30"
                  )}>
                  <span>Select a theme</span>
                  <ChevronDownIcon className="size-4 opacity-50" />
               </div>
            )}
         </div>
      </div>
   );
}
