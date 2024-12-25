import mongoose from "mongoose";
import { connectDB } from "./connectDB";
import { Week } from "@/model/dbSchema";

const SeedDatabase = async () => {
    try {
        await connectDB();

        const week1 = new Week({
            _id: "week1",
            title: "HTML",
            weekNumber: 1,
            totalLectures: 5,
            sections: [
              {
                title: "Introduction",
                steps: [
                  { text: "Learn the basics", url: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
                  { text: "Writing Semantic HTML", url: "https://www.youtube.com/watch?v=DSRMCZwM3YE" },
                  { text: "Forms and Validation", url: "https://www.youtube.com/watch?v=LhWQlBdqaeM" },
                ],
              },
              {
                title: "Intermediate Topics",
                steps: [
                  { text: "Accessibility", url: "https://www.youtube.com/watch?v=e2nkq3h1P68&t=92s" },
                  { text: "SEO Basics", url: "https://www.youtube.com/watch?v=ORazAn-Iigg" },
                ],
              },
            ],
          });
      
          await week1.save();
          console.log("Week 1 saved to the database!");  
    }
    catch (error) {
        console.error("Error seeding the database:", error);
      } finally {
        mongoose.disconnect();
      }
}

SeedDatabase().catch((error) => console.error("Unexpected error:", error));