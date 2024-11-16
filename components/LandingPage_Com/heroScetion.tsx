import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedShinyTextDemo } from "./AnimatedShinyText";
import Link from "next/link";



export default function HeroSection() {
    return (
        <div className="max-w-3xl mx-auto px-4 pt-20 md:pt-28 text-center mb-10">
            <AnimatedShinyTextDemo />
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 mt-6">
                Zero to Full-Stack Hero:
                Web Dev Course for Beginners
            </h1>
            <div className="space-y-6 text-gray-600">
                <p className="text-center">
                    Transform your career without breaking the bank. No CS degree required.
                </p>
                <div>
                    <h2 className="font-semibold text-black mb-2">Why is this free?</h2>
                    <p>Because it makes no sense to sell courses that teach basics.</p>
                </div>
                <div>
                    <p>
                        First earn ₹30K per month and pay your bills. Don&apos;t worry. Industry sell a lot of expensive stuff too, you can
                        buy them once you have the basic knowledge.
                    </p>
                </div>
                <p className="font-semibold text-black">But first, learn the basics for free.</p>
            </div>

            <div>
                <Link href="/full-stack">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white mt-10 group">
                    Getting Start
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>
            </div>
        </div>

    )
}