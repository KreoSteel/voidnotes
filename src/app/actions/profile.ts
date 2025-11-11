"use server";
import { updateUserProfile } from "../utils/data-access/profile";
import { requireAuth } from "../utils/lib/auth";

type ProfileActionState = 
    | { error: string }
    | { success: true; user: { email: string; name: string } }
    | null;

export async function updateUserProfileAction(
    prevState: ProfileActionState, 
    formData: FormData
): Promise<{ error: string } | { success: true; user: { email: string; name: string } }> {
    const user = await requireAuth();
    if (!user) {
        return { error: "Unauthorized" };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        const updatedUser = await updateUserProfile(user.id, { name, email });
        if (!updatedUser) {
            return { error: "Failed to update user profile" };
        }
        return { success: true, user: updatedUser };
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "Failed to update user profile" };
    }
}
