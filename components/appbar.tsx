import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Appbar() {
  return (
    <header className="sticky top-0 bg-white flex h-16 items-center justify-end border-b px-4 lg:px-6">
      <Link href="https://project-ideas-nine.vercel.app/">
        <p className="mr-10">Project Ideas</p>
      </Link>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Joined with heart by
        </span>
        <span>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </span>
      </div>
    </header>
  );
}
