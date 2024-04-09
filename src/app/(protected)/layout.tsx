import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import UserMenu from "@/components/_navbar/UserMenu";

export const metadata: Metadata = {
  title: "GreatDay",
  description: "GreatDay",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className={cn(
        "h-14 w-screen mb-5",
        "flex justify-center items-center gap-5",
        "border-b-2 border-foreground"
      )}>
        {/* Left: Logo */}
        <div className="w-64 flex items-center gap-2">
          <Image
            src="./logo.svg"
            width={32}
            height={32}
            alt="logo"
          />

          <h3 className="text-2xl font-bold tracking-tight">
            GreatDay
          </h3>
        </div>

        {/* Center: Search bar */}
        <div className='w-[600px]'>
          Search...
        </div>

        {/* Right: User Avatar */}
        <div className='w-64 flex justify-end'>
          <UserMenu />
        </div>
      </header>

      <div className="flex justify-center gap-5">
        <aside className='w-64'>
          {/* My Profile Summary */}

          {/* Nav Menu */}
          <Card>
            <CardContent>
              <nav className="flex flex-col">
                <Link href="/home">Home</Link>
                <Link href="/notification">Notification</Link>
                <Link href="/messages">Messages</Link>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Center: Feed & Post Composer */}
        <main className="min-w-[600px]">
          {children}
          
        </main>

        {/* Right: Who to follow */}
        <aside className='w-64'>
          <Card>
            <CardHeader>
              <CardTitle>Who to follow</CardTitle>
            </CardHeader>
            <CardContent>
              HAHAHA
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
