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

    return response.json();
    
  }catch(error){
    console.error('Error:', error);
  }
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="data_entry" className='h-full, w-[50vw], bg-red-500'>
        <h1>Data Entry Point</h1>

      </section>
      <section id="data_output">
        <h1>Response</h1>
      </section>
    </>
  )
}

export default App
