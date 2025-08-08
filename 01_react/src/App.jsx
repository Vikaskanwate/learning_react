import { useState } from 'react'
import './App.css'

function App() {

  let [count,setCount] = useState(0);

  const addvalue = () =>{
  

      count = count  + 1;
      setCount(count);

  }
  const removeValue = ()=>{
    count= count - 1;
    setCount(count)
  }

  return (
    <section>
      <h1>counter app</h1>
      <h2>counter values: {count}</h2>
      <div className='btndiv'>
        <button onClick={addvalue}>Add value </button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </div>
    </section>
  )
}

export default App
