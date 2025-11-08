import { prisma } from "../prisma";

export async function getUserProfile(userId: string) {
    return await prisma.user.findUnique({
        where: { id: userId },
        select: {
            name: true,
            email: true,
        },
    });
}

export async function updateUserProfile(userId: string, data: { name?: string, email?: string }) {
    return await prisma.user.update({
        where: { id: userId },
        data,
        select: {
            name: true,
            email: true,
        },
    });
}