import { useState } from 'react'

async function postData(url, data){
  try{
    const response = await fetch(url, {
      method: 'POST',
      
    })

  }catch (e){

  }
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="data_entry">
        <h1>Data Entry Point</h1>

      </section>
      <section id="data_output">
        <h1>Response</h1>
      </section>
    </>
  )
}

export default App
