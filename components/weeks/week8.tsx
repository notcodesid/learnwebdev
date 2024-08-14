export default function Week8() {
    const Server = [
      { text: "Creating First Server with Express", url: "https://www.youtube.com/watch?v=N2-FyBBxOZA" },
      { text: "HTTP Requests", url: "https://www.youtube.com/watch?v=qgZiUvV41TI" },
      { text: "Postman", url: "https://www.youtube.com/watch?v=4-DmsxM347k" },
      { text: "Middlewares", url: "https://www.youtube.com/watch?v=n2c0mf1sza4" },
    ];
  
    const APis = [
      { text: "REST API", url: "https://www.youtube.com/watch?v=cJAyEOZQUQY" },
      { text: "GraphQL API", url: "https://www.youtube.com/watch?v=WtkKwO1viI8&t=808s" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 8 • - Lectures</div>
          <h2 className="text-2xl font-bold">Express with Node.js And API</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Express with Node.js</h3>
            <ul className="space-y-1">
              {Server.map((step, index) => (
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
            <h3 className="font-semibold mb-2">API</h3>
            <ul className="space-y-1">
              {APis.map((step, index) => (
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
  