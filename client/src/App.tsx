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
  const [code, setCode] = useState('');
  const [response, setResponse] = useState(null);
  
  async function handleSubmit() {
    const json = await postData('http://localhost:3000/api/review', { code });
    setResponse(json);
  }


  return (
    <>
      <section id="data_entry" className='h-full, w-[50vw], bg-red-500'>
        <h1>Data Entry Point</h1>
        <textarea className="border border-gray-300 rounded py-2 px-4" placeholder="Enter data..." onChange={(e) => setCode(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit()}>Review</button>
      </section>
      <section id="data_output">
        <h1>Response</h1>
        <div>
          {response ? <pre>{JSON.stringify(response, null, 5)}</pre> : <p>No response yet.</p>}
        </div>
      </section>
    </>
  )
}

export default App
