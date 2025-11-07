"use client";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAction } from "@/app/actions/auth";
import { useActionState } from "react";
import Link from "next/link";

export default function LoginPage() {
   const [state, formAction, isPending] = useActionState(signInAction, null);

   return (
      <Card className="w-full max-w-sm">
         <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
               Enter your email below to login to your account
            </CardDescription>
            <CardAction>
               <Link
                  href="/auth/register"
                  className="text-sm underline-offset-4 hover:underline">
                  Sign Up
               </Link>
            </CardAction>
         </CardHeader>
         <form action={formAction}>
            <CardContent>
               {state?.error && (
                  <p className="mb-4 text-sm text-red-500">{state?.error}</p>
               )}
               <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                     />
                  </div>
                  <div className="grid gap-2 mb-6">
                     <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                           href="#"
                           className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                           Forgot your password?
                        </a>
                     </div>
                     <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        required
                     />
                  </div>
               </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
               <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Logging in..." : "Login"}
               </Button>
            </CardFooter>
         </form>
      </Card>
   );
}
