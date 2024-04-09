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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginFormSchema } from "@/data-schemas";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");

    const validationResult = loginFormSchema.safeParse({ username, password });
    if (!validationResult.success) {
      setErrorMessage("Please enter both username and password");
      setIsLoading(false);
      return;
    }

    const result = await login(
      validationResult.data.username,
      validationResult.data.password
    );

    if (result?.message) {
      setErrorMessage(result.message);
      setIsLoading(false);
    }
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
            <div className="
              bg-red-500 text-white
              font-semibold text-xs
              px-2 py-1 rounded-sm
            ">
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
            disabled={isLoading}
          >
            { isLoading ? "..." : "Login" }
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
