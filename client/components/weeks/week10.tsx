import { CircleDot } from "lucide-react";

export default function Week10() {
    const basicReact = [
      { text: "Components", url: "https://www.youtube.com/watch?v=VSSm2nebwak&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=4" },
      { text: "Rendering", url: "https://www.youtube.com/watch?v=mECV6nGOqNo" },
      { text: "Props", url: "https://www.youtube.com/watch?v=VpGFuThTjhY&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=5" },
      { text: "Hooks", url: "https://www.youtube.com/watch?v=4Cf86qVEIJY" },
      { text: "Routers", url: "https://www.youtube.com/watch?v=VJov5QWEKE4" },
    ];
  
    const interReact = [
      { text: "State management ( Redux )", url: "https://www.youtube.com/watch?v=fxT54eRIsc4" },
      { text: "API Calls", url: "https://www.youtube.com/watch?v=V2x2Nq-fcTU&list=PLinedj3B30sBm5wu3ixPRQ0gDqHJUlxQf&index=9" },
      { text: "Framework ( Next JS )", url: "https://www.youtube.com/watch?v=wm5gMKuwSYk" },
      { text: "Type  & vaildation ( Zod )", url: "https://www.youtube.com/watch?v=9UVPk0Ulm6U&t=28s" },
      { text: "Animation ( Framer )", url: "https://www.youtube.com/watch?v=GOuwOI-WSkE" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 10 • 10 Lectures</div>
          <h2 className="text-2xl font-bold">React</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Basic Topics</h3>
            <ul className="space-y-1">
              {basicReact.map((step, index) => (
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
              {interReact.map((step, index) => (
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
  