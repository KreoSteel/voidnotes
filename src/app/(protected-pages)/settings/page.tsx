import ProfileInfoForm from "@/components/settings/ProfileInfoForm";
import Preferences from "@/components/settings/Preferences";
import { requireAuth } from "@/app/utils/lib/auth";
import { getUserProfile } from "@/app/utils/data-access/profile";

export default async function SettingsPage() {
   const user = await requireAuth();
   const profile = await getUserProfile(user.id);

   return (
      <div>
         <h1>Settings</h1>
         <ProfileInfoForm initialData={profile} />
         <Preferences />
      </div>
   );
}