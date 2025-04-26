

export default function Week3() {
    const intermediateProject = [
      { text: "Project 1", url: "https://www.youtube.com/watch?v=TzuWIHGFKCQ" },
      { text: "Project 2", url: "https://www.youtube.com/watch?v=nGhKIC_7Mkk" },
      { text: "Project 3", url: "https://www.youtube.com/watch?v=ovKVqo-L2EM" },
    ];
  
    const frameworkProject = [
      { text: "Bootstrap Project", url: "https://www.youtube.com/watch?v=nPxCYOO1e44" },
      { text: "Tailwind CSS Project", url: "https://www.youtube.com/watch?v=tS7upsfuxmo&t=155s" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 3 • 5 Projects</div>
          <h2 className="text-2xl font-bold">HTML & CSS Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Intermedicate</h3>
            <ul className="space-y-1">
              {intermediateProject.map((step, index) => (
                <li key={index}>
                  <a 
                    href={step.url}
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
<span className="mr-2"> 👉🏻 </span>
                    <span className="text-gray-600 group-hover:text-gray-900">{step.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Framework Projects</h3>
            <ul className="space-y-1">
              {frameworkProject.map((step, index) => (
                <li key={index}>
                  <a 
                    href={step.url}
                    className="flex items-center py-1 rounded-md transition-colors duration-200 hover:bg-gray-100 group"
                  >
<span className="mr-2"> 👉🏻 </span>
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
  