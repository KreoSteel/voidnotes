import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getServerSession } from "@/app/utils/dal/authorization";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
