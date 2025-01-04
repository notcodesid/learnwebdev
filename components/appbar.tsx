import Image from "next/image"
import profie from "@/public/x-pfp.png"
import Link from "next/link"

export default function Appbar() {
    return (
        <header className="sticky top-0 bg-white flex h-16 items-center justify-end border-b px-4 lg:px-6">
            <Link href="https://project-ideas-nine.vercel.app/">
            <p className="mr-10">Project Ideas</p>
            </Link>
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                    Curated with love by
                </span>
                 <span>
                    <Link href={"https://x.com/notcodesid"}>
                    <Image className="rounded-full" src={profie} alt="x-pfp" height={50}  width={50}/>
                    </Link>
                 </span>
            </div>
        </header>
    )
}