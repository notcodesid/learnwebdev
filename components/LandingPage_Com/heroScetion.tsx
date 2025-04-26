import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedShinyTextDemo } from "./AnimatedShinyText";
import Link from "next/link";



export default function HeroSection() {
    return (
        <div className="max-w-3xl mx-auto px-4 pt-20 md:pt-28 mb-10">
        <div className="text-lg font-medium text-orange-500">100 % Free • 11 Weeks</div>
            <h1 className="text-3xl md:text-4xl font-bold  mb-6 mt-6">Web development For Beginners: Everthing You Need in One Place</h1>
            <div className="space-y-6 text-gray-600">
                <p className="">
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
        </div>

    )
}