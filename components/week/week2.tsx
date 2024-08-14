export default function Week2() {
    const introCSS = [
      { text: "Why do we need CSS?", url: "https://www.youtube.com/watch?v=AP3_V7KXHs4&t=50s" },
      { text: "How to add CSS", url: "https://www.youtube.com/watch?v=AP3_V7KXHs4&t=50s" },
      { text: "Basic of CSS", url: "https://www.youtube.com/watch?v=wRNinF7YQqQ" },
      { text: "Responsiveness", url: "https://www.youtube.com/watch?v=yU7jJ3NbPdA" },
      { text: "Animation", url: "https://www.youtube.com/watch?v=YszONjKpgg4" },
    ];
  
    const layoutCSS = [
        { text: "Flexbox", url: "https://www.youtube.com/watch?v=tXIhdp5R7sc" },
        { text: "Grid", url: "https://www.youtube.com/watch?v=BNmxUzPRYdw" },
      ];
      
    const frameworkCSS = [
      { text: "Bootstrap", url: "https://www.youtube.com/watch?v=Jyvffr3aCp0" },
      { text: "Tailwind CSS", url: "https://www.youtube.com/watch?v=_9mTJ84uL1Q" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 2 • 9 Lectures</div>
          <h2 className="text-2xl font-bold">CSS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Introduction</h3>
            <ul className="space-y-1">
              {introCSS.map((step, index) => (
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
            <h3 className="font-semibold mb-2">Layout</h3>
            <ul className="space-y-1">
              {layoutCSS.map((step, index) => (
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
            <h3 className="font-semibold mb-2">CSS Framework</h3>
            <ul className="space-y-1">
              {frameworkCSS.map((step, index) => (
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
  