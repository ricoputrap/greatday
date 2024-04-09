import Login from "@/components/_login";
import { EnumCookie, EnumPagePath } from "@/types/enum";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const token = cookies().get(EnumCookie.SESSION);
  if (token) {
    redirect(EnumPagePath.HOME);
  }

  return <Login />
}
