import { Resource } from "@/app/model/resources";
import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
      const resource = await req.json();
      console.log('Received resource:', resource);
  
      // Ensure URL has a protocol
      if (!/^https?:\/\//i.test(resource.url)) {
        resource.url = 'https://' + resource.url;
      }
  
      const newResource = await Resource.create(resource);
      console.log('Created resource:', newResource);
  
      return NextResponse.json({
        msg: "Resource added successfully",
        resource: newResource
      }, { status: 201 });
    } catch (err) {
        if (err instanceof Error) {
          console.error("Error details:", err);
          return NextResponse.json({
            msg: "Error adding resource",
            error: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
          }, { status: 500 });
        } else {
          console.error("An unexpected error occurred:", err);
          // Handle cases where err might not be an instance of Error
          return NextResponse.json({
            msg: "Error adding resource",
            error: "An unexpected error occurred",
          }, { status: 500 });
        }
      }
}
