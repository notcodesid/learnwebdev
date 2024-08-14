export default function Week6() {
    const git = [
      { text: "Introduction to GIT", url: "https://www.youtube.com/watch?v=7tOLcNZfPso&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o" },
      { text: "Master Git Init", url: "https://www.youtube.com/watch?v=l_V7sNrpd3A&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=2" },
      { text: "Git commits and logs", url: "https://www.youtube.com/watch?v=wVGiJKSnJY0&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=3" },
      { text: "Git internal working and configs", url: "https://www.youtube.com/watch?v=owQtvW112tI&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=4" },
      { text: "Git merge and git conflicts", url: "https://www.youtube.com/watch?v=vw-2U0u7Ni4&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=5" },
      { text: "Git Diff and stashing", url: "https://www.youtube.com/watch?v=EYdIMAVFIk0&list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&index=6" },
    ];
  
    const github = [
      { text: "Github in one shot", url: "https://www.youtube.com/watch?v=TsSjgkfAeJ0" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 6 • 5 Lectures</div>
          <h2 className="text-2xl font-bold">Git and Github</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Git</h3>
            <ul className="space-y-1">
              {git.map((step, index) => (
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
            <h3 className="font-semibold mb-2"> Github</h3>
            <ul className="space-y-1">
              {github.map((step, index) => (
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
  