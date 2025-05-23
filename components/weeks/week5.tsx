
export default function Week5() {
    const projects = [
      { text: "Project 1", url: "https://www.youtube.com/watch?v=AiFfDjmd0jU&t=2s" },
      { text: "Project 2", url: "https://www.youtube.com/watch?v=AMI-6F7CSFc" },
      { text: "Project 3", url: "https://www.youtube.com/watch?v=ldwlOzRvYOU" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 5 • 3 Projects</div>
          <h2 className="text-2xl font-bold">HTML, CSS & JavaScript Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Basic and Advanced</h3>
            <ul className="space-y-1">
              {projects.map((step, index) => (
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
  