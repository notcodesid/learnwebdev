import { Resource } from "@/app/model/resources";
import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const resource = await req.json();
        
        // Ensure URL has a protocol
        if (!/^https?:\/\//i.test(resource.url)) {
            resource.url = 'https://' + resource.url;
        }

        const newResource = await Resource.create(resource);
        return NextResponse.json({
            msg: "Resource added successfully",
        }, { status: 201 });
    } catch (err) {
        console.error("Error:", err);
    }
}