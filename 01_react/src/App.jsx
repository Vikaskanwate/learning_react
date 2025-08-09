import { useState } from 'react'
import './App.css'
import ThemeToggle from './component/ThemeToggle';

function App() {

  let [count, setCount] = useState(0);

  const addvalue = () => {
    count = count + 1;
    setCount(count);

  }
  const removeValue = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count)
    }
  }

  return (
    <div>
      <ThemeToggle />
      <section>
        <div className='counter'>
          <h1>counter app</h1>
          <div className='container'>
            <h2 className='top'>counter values: {count}</h2>
            <div className='bottom-row'>
              <button className='left' onClick={addvalue}>Add value </button>
              <br />
              <button className='right' onClick={removeValue}>Remove value</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
