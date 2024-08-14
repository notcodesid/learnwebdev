export default function Week7() {
    const introBackend = [
      { text: "Overview", url: "https://www.youtube.com/watch?v=XBu54nfzxAQ" },
      { text: "Backend Tools and Technologies", url: "https://www.youtube.com/watch?v=tN6oJu2DqCM" },
    ];
  
    const roadmapSteps = [
      { text: "Node.js", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
      { text: "Express", url: "https://www.youtube.com/watch?v=SccSCuHhOw0" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 7 • 4 Lectures</div>
          <h2 className="text-2xl font-bold">Backend Development</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Introduction</h3>
            <ul className="space-y-1">
              {introBackend.map((step, index) => (
                <li key={index}>
                  <a 
                    href={step.url}
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                    <span className="mr-2 text-gray-400 group-hover:text-gray-600">👉</span>
                    <span className="text-gray-600 group-hover:text-gray-900">{step.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technology</h3>
            <ul className="space-y-1">
              {roadmapSteps.map((step, index) => (
                <li key={index}>
                  <a 
                    href={step.url}
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
                    <span className="mr-2 text-gray-400 group-hover:text-gray-600">👉</span>
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
  