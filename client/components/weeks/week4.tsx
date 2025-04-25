import { CircleDot } from "lucide-react";

export default function Week4() {
    const introductionSteps = [
      { text: "Learn the basics", url: "https://www.youtube.com/watch?v=lkIFF4maKMU" },
      { text: "DOM Manipulation", url: "https://www.youtube.com/watch?v=5fb2aPlgoys" },
      { text: "Advance Topics", url: "https://www.youtube.com/watch?v=R9I85RhI7Cg" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 4 • 3 Lectures</div>
          <h2 className="text-2xl font-bold">JavaScript</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Basic and Advanced</h3>
            <ul className="space-y-1">
              {introductionSteps.map((step, index) => (
                <li key={index}>
                  <a 
                    href={step.url}
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                   <span className="mr-2"><CircleDot className="w-4 h-4 text-orange-500" /></span>
                    <span className="text-gray-600 group-hover:text-gray-900">{step.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="w-full max-w-3xl mx-auto">
                  <hr className="border-t-2 border-gray-200 my-4" />
              </div>
  
      </div>
    )
  }
  