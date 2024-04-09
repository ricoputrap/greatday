"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/server/auth"
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      const formData = new FormData(event.target as HTMLFormElement);
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;

      if (!username || !password) {
        setErrorMessage("Please enter both username and password");
        return;
      }

      const result = await login(username, password);

      if (result?.message) {
        setErrorMessage(result.message);
      }
    })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4 pt-4">
          {errorMessage && (
            <div className="text-red-500">
              {errorMessage}
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            type="submit"
            disabled={isPending}
          >
            { isPending ? "..." : "Login" }
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
