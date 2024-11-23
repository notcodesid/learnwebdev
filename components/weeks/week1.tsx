import { CircleDot } from "lucide-react";

export default function Week1() {
  const introductionSteps = [
    { text: "Learn the basics", url: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
    { text: "Writing Semantic HTML", url: "https://www.youtube.com/watch?v=DSRMCZwM3YE" },
    { text: "Forms and Vaildation", url: "https://www.youtube.com/watch?v=LhWQlBdqaeM" },
  ];

  const roadmapSteps = [
    { text: "Accessibility", url: "https://www.youtube.com/watch?v=e2nkq3h1P68&t=92s" },
    { text: "SEO Basics", url: "https://www.youtube.com/watch?v=ORazAn-Iigg" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="space-y-1 mb-4">
        <div className="text-lg font-medium text-orange-500">Week 1 • 5 Lectures</div>
        <h2 className="text-2xl font-bold">HTML</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Introduction</h3>
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
        <div>
          <h3 className="font-semibold mb-2">Intermedicate Topics</h3>
          <ul className="space-y-1">
            {roadmapSteps.map((step, index) => (
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
