"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerFormSchema } from '@/data-schemas';
import { register } from '@/server/auth';
import React, { useState } from 'react'

const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const fullname = formData.get("fullname");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const validationResult = registerFormSchema.safeParse({ fullname, username, email, password });
    if (!validationResult.success) {
      setErrorMessage("Please enter all required fields");
      setIsLoading(false);
      return;
    }

    const result = await register({
      fullname: validationResult.data.fullname,
      username: validationResult.data.username,
      email: validationResult.data.email,
      password: validationResult.data.password
    });

    if (result?.message) {
      setErrorMessage(result.message);
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your data below to create a new account.
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
            <Label htmlFor="fullname">Fullname</Label>
            <Input id="fullname" name="fullname" type="text" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
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
            { isLoading ? "..." : "Sign Up" }
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default RegisterForm