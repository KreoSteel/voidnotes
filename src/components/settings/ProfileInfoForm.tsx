"use client";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { updateUserProfileAction } from "@/app/actions/profile";


export default function ProfileInfoForm({ initialData }: { initialData: { name: string; email: string } | null }) {
    const [state, formAction, isPending] = useActionState(updateUserProfileAction, null)

    const userData = state && "user" in state ? state.user : initialData;

    useEffect(() => {
        if (state && "error" in state) {
            toast.error(state.error);
        } else if (state && "success" in state && state.success) {
            toast.success("Profile updated successfully!");
        }
    }, [state]);

    return (
        <form action={formAction} className="flex flex-col gap-4 mt-10 border border-border rounded-md bg-surface-hover p-6 w-1/4">
            <div>
                <h2>Profile</h2>
                <p className="text-foreground-muted">Manage your profile information.</p>
                {state && "error" in state && <p className="text-destructive text-sm mb-4 text-center">{state.error}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" className="w-full" defaultValue={userData?.name || ""} />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" className="w-full" defaultValue={userData?.email || ""} />
            </div>
            <Button type="submit" variant="default" className="w-fit" disabled={isPending}>
                {isPending ? "Saving..." : "Save Changes"}
            </Button>
        </form>
    )
}