"use client";
import { signUpAction } from "@/app/actions/auth";
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
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpPage() {
   const [state, formAction, isPending] = useActionState(signUpAction, null);

   return (
      <Card className="w-full max-w-md">
         <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
               Enter your information below to create an account
            </CardDescription>
            <CardAction>
               <Button variant="link" asChild>
                  <Link
                     href="/auth/login"
                     className="text-sm underline-offset-4 hover:underline">
                     Sign In
                  </Link>
               </Button>
            </CardAction>
         </CardHeader>
         <form action={formAction}>
            <CardContent>
               {state?.error && (
                  <p className="mb-4 text-sm text-red-500">{state?.error}</p>
               )}
               <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                     <Label htmlFor="name">Name</Label>
                     <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                     />
                  </div>
                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        name="email"
                        type="email"
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
                  {isPending ? "Signing up..." : "Sign up"}
               </Button>
            </CardFooter>
         </form>
      </Card>
   );
}
