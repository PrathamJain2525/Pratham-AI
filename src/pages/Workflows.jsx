import { workflows } from '../data/mockData';

export default function Workflows() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">AI Workflows</h1>
      <p className="mt-2 text-gray-600">Step-by-step guides for common AI tasks and processes.</p>

      <div className="mt-8 space-y-8">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{workflow.title}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-800">
                  {workflow.difficulty}
                </span>
              </div>
              
              <p className="mt-2 text-gray-600">{workflow.description}</p>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Steps:</h4>
                <ol className="mt-2 space-y-2">
                  {workflow.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 text-sm mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Tools Used:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {workflow.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-secondary-100 text-secondary-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}