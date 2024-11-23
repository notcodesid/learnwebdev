import { CircleDot } from "lucide-react";

export default function Week9() {
    const basicDB = [
      { text: "Different type of Database", url: "https://www.youtube.com/watch?v=W2Z7fbCLSTw&t=9s" },
      { text: "No SQL vs SQL", url: "https://www.youtube.com/watch?v=ruz-vK8IesE" },
    ];
  
    const NoSQL = [
        { text: "MongoDB in one shot", url: "https://www.youtube.com/watch?v=J6mDkcqU_ZE" },
      ];
      
    const SQLDB = [
      { text: "Postgres DB", url: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
      { text: "Prisma", url: "https://www.youtube.com/watch?v=RebA5J-rlwg&t=155s" },
    ];
  
    return (
      <div className="w-full max-w-3xl mx-auto p-5">
        <div className="space-y-1 mb-4">
          <div className="text-lg font-medium text-orange-500">Week 9 • 5 Lectures</div>
          <h2 className="text-2xl font-bold">Database</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Basic Information about DB</h3>
            <ul className="space-y-1">
              {basicDB.map((step, index) => (
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
            <h3 className="font-semibold mb-2">No SQL</h3>
            <ul className="space-y-1">
              {NoSQL.map((step, index) => (
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
            <h3 className="font-semibold mb-2">SQL</h3>
            <ul className="space-y-1">
              {SQLDB.map((step, index) => (
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
  