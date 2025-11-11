import { prisma } from "../lib/prisma";
import { requireAuth } from "../lib/auth";

export async function getUserProfile(userId: string) {
   await requireAuth();

   return await prisma.user.findUnique({
      where: { id: userId },
      select: {
         name: true,
         email: true,
      },
   });
}

export async function updateUserProfile(
   userId: string,
   data: { name?: string; email?: string }
) {
   await requireAuth();

   return await prisma.user.update({
      where: { id: userId },
      data,
      select: {
         name: true,
         email: true,
      },
   });
}
