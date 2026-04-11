import { useState } from 'react'

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




function App() {

  interface ReviewResponse {
    bugs: any[]
    security: any[]
    suggestions: any[]
  }

  const [response, setResponse] = useState<ReviewResponse | null>(null);
  const [code, setCode] = useState('');

  async function handleSubmit() {
    const json = await postData('http://localhost:3000/api/review', { code });
    setResponse(json);
  }


  return (
    <main className="flex h-screen p-4 gap-4">

      {/* Left — input */}
      <section id="input-field" className="flex flex-col w-1/2 gap-3">
        <h1>Data Entry Point</h1>
        <textarea className="flex-1 border border-gray-300 rounded-lg p-3 font-mono resize-none4" 
          placeholder="Enter data..." 
          onChange={(e) => setCode(e.target.value)} 
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg" 
          onClick={() => handleSubmit()}>
          Review
        </button>
      </section>

      {/* Right — output */}
      <section id="output-field" className="flex flex-col w-1/2 gap-3 overflow-y-auto">
        <h1>Response</h1>
        <div>
          <h2>Bugs:</h2>

          {response?.bugs?.map((bug) => (
            <div key={bug.id} className="border rounded-lg p-3 mb-2">
              {Object.entries(bug).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="text-gray-400 capitalize">{key}: </span>
                  <span>{String(value)}</span>
                </div>
              ))}
            </div>
          ))}
          <h2>Security:</h2>
          {response?.security?.map((securityIssue) => (
            <div key={securityIssue.id} className="border rounded-lg p-3 mb-2">
              {Object.entries(securityIssue).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="text-gray-400 capitalize">{key}: </span>
                  <span>{String(value)}</span>
                </div>
              ))}
            </div>
          ))}
          <h2>Suggestions:</h2>
          {response?.suggestions?.map((suggestion) => (
            <div key={suggestion.id} className="border rounded-lg p-3 mb-2">
              {Object.entries(suggestion).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="text-gray-400 capitalize">{key}: </span>
                  <span>{String(value)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default App
