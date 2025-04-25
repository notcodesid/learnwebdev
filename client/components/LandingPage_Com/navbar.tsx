import Link from "next/link";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={"/"}>
              <div className="text-xl font-bold text-orange-500">LearnWebDev</div>
            </Link>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="https://github.com/notcodesid/learnwebdev">
                <Github className="w-4 h-4" />
                Open Source
              </Link>
            </Button>
          </div>
        </div>
      </header>


    </>
  )
}