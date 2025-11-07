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
                  <SidebarMenuButton 
                     asChild
                     isActive={pathname === "/"}
                  >
                     <Link href="/">
                        <HomeIcon />
                        <h3>Dashboard</h3>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton 
                     asChild
                     isActive={pathname.startsWith("/notes")}
                  >
                     <Link href="/notes/create-note">
                        <PlusIcon />
                        <h3>New Note</h3>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton 
                     asChild
                     isActive={pathname === "/settings"}
                  >
                     <Link href="/settings">
                        <SettingsIcon />
                        <h3>Settings</h3>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarContent>
         <SidebarSeparator />
         <SidebarFooter>
            <SidebarMenuButton 
               onClick={signOutAction} 
               className="flex items-center gap-2"
            >
               <LogOutIcon />
               <h3>Logout</h3>
            </SidebarMenuButton>
         </SidebarFooter>
      </Sidebar>
   );
}
