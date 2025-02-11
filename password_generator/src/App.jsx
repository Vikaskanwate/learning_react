import { useCallback, useState } from "react";
function App(){
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "123456789";
    if(charAllowed) str += "!@#$%^&*_";

    for(let i = 1; i < Array.length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-5 my-8 text-orange-500 bg-gray-400">
      <h1 className="text-center text-3xl mb-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden py-1 mb-4 bg-red-100">
        <input type="text" 
        value={password}
        className="outline-none w-full py- px-3"
        placeholder="password"
        readOnly
        />
        <button className="mx-2 bg-black p-2 rounded-lg" >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
    </>
  )
}

export default App;