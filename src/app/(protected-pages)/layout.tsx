import { SidebarWrapper } from "@/components/layout/SidebarWrapper";
import { Toaster } from "sonner";

export default async function PageLayout({
   children,
}: {
   children: React.ReactNode;
}) {

   return (
      <SidebarWrapper>
         <Toaster />
         <div className="h-full w-full bg-surface py-8 px-10">{children}</div>
      </SidebarWrapper>
   );
}
