import Home from "@/components/_home";
import { EnumCookie, EnumPagePath } from "@/types/enum";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function HomePage() {
  const token = cookies().get(EnumCookie.SESSION);
  if (!token) {
    redirect(EnumPagePath.LOGIN);
  }

  return <Home />;
}
