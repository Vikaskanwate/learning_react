import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(15);
  const Addvalue = () => {
    if (counter < 20)
      counter = counter + 1;
    setCounter(counter);
  }
  const removeValue = () => {
    if (counter > 0)
      counter = counter - 1;
    setCounter(counter);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter values : {counter}</h2>
      <div className="buttonDiv">
        <button onClick={Addvalue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </div>
      
    </div>
  )
}
export default App
