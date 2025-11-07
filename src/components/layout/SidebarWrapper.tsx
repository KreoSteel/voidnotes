"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarComponent } from "./Sidebar";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

