"use client";
import {
   Sidebar,
   SidebarContent,
   SidebarHeader,
   SidebarFooter,
   SidebarMenuButton,
   SidebarMenu,
   SidebarMenuItem,
   SidebarSeparator,
} from "@/components/ui/sidebar";
import { HomeIcon, LogOutIcon, PlusIcon, SettingsIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOutAction } from "@/app/actions/auth";

export function SidebarComponent() {
   const pathname = usePathname();

   return (
      <Sidebar>
         <SidebarContent>
            <SidebarHeader>
               <h1>VoidNotes</h1>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarMenu className="flex flex-col gap-4">
               <SidebarMenuItem>
                  <Link href="/">
                  <SidebarMenuButton 
                     isActive={pathname === "/"}
                     className={pathname === "/" ? "text-accent [&>h3]:text-accent [&>svg]:text-accent" : ""}
                  >
                     <HomeIcon />
                     <h3>Dashboard</h3>
                  </SidebarMenuButton>
                  </Link>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <Link href="/create-note">
                  <SidebarMenuButton 
                     isActive={pathname === "/create-note"}
                     className={pathname === "/create-note" ? "text-accent [&>h3]:text-accent [&>svg]:text-accent" : ""}
                  >
                     <PlusIcon />
                     <h3>New Note</h3>
                  </SidebarMenuButton>
                  </Link>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <Link href="/settings">
                  <SidebarMenuButton 
                     isActive={pathname === "/settings"}
                     className={pathname === "/settings" ? "text-accent [&>h3]:text-accent [&>svg]:text-accent" : ""}
                  >
                     <SettingsIcon />
                     <h3>Settings</h3>
                  </SidebarMenuButton>
                  </Link>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarContent>
         <SidebarSeparator />
         <SidebarFooter>
            <SidebarMenuButton onClick={signOutAction} className="flex items-center gap-2">
               <LogOutIcon />
               <h3>Logout</h3>
            </SidebarMenuButton>
         </SidebarFooter>
      </Sidebar>
   );
}
