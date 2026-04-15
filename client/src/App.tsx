import { useState } from 'react'
import { mockResponse } from './mockData';

async function postData(url ="", data={}) {
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); // Manual error check
    }
    const result = await response.json(); 
    console.log('Success:', result);

    return result;
    
  }catch(error){
    console.error('Error:', error);
  }
}

 interface ReviewResponse {
    bugs: any[]
    security: any[]
    suggestions: any[]
  }


function App() {

 

  const [response, setResponse] = useState<ReviewResponse | null>(null);
  const [code, setCode] = useState('');

  async function handleSubmit() {
    // const json = await postData('http://localhost:3000/api/review', { code });
    // setResponse(json);
    setResponse(mockResponse);
  }


  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex flex-col items-center justify-center shrink-0 mx-4 p-4 bg-gray-800 text-white rounded-b-lg">
        <h1 className="text-2xl font-bold">AI Code Reviewer</h1>
        <p className="text-sm text-gray-400">Enter your code and let the AI find bugs, security issues, and improvement suggestions.</p>
      </header>

      <main className="flex flex-1 overflow-hidden bg-gray-800 rounded-lg m-4 p-4 gap-6">

        {/* Left — input */}
        <section id="input-field" className="flex flex-col w-1/2 gap-3">
          <h2>Code Input</h2>
          <div className="flex flex-col flex-1 gap-2 border border-gray-300 rounded-lg p-3 font-mono resize-none">
            <textarea className="flex-1 p-3 font-mono resize-none focus:outline-none" 
              placeholder="Enter your code here for review..." 
              onChange={(e) => setCode(e.target.value)} 
            />
            <button className="w-1/3 self-end bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg" 
              onClick={() => handleSubmit()}>
              Review
            </button>
          </div>
        </section>

        {/* Right — output */}
        <section id="output-field" className="flex flex-col  w-1/2 gap-3 overflow-y-auto">
          <h2>Response</h2>
          <div className="flex-1 bg-gray-900 border border-gray-300 rounded-lg p-3 overflow-y-auto space-y-4">
          {response ? (
            <>
              <section>
                <h3 className="mb-4 text-lg font-semibold text-blue-400">Bugs:</h3>
                {response.bugs.map((bug) => (
                  <div key={bug.id} className="border bg-gray-700 rounded-lg p-3 mb-2">
                    {Object.entries(bug).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-gray-400 capitalize">{key}: </span>
                        <span>{String(value)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
              <section>
                <h3 className="mb-4 text-lg font-semibold text-blue-400">Security:</h3>
                {response.security.map((securityIssue) => (
                  <div key={securityIssue.id} className="border bg-gray-700 rounded-lg p-3 mb-2">
                    {Object.entries(securityIssue).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-gray-400 capitalize">{key}: </span>
                        <span>{String(value)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
              <section>
                <h3 className="mb-4 text-lg font-semibold text-blue-400">Suggestions:</h3>
                {response.suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="border bg-gray-700 rounded-lg p-3 mb-2">
                    {Object.entries(suggestion).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-gray-400 capitalize">{key}: </span>
                        <span>{String(value)}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
            </>
          ) : (
            <p className="text-gray-400">No response yet. Please enter code and click "Review".</p>
          )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
