import React from 'react'

const Num = () => {
  //user declare state variable
  const [num, setNum] = useState(0)
  return ( 
    <div className="h-[100vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl">Number is {num}</h2>
        <button className="rounded bg-amber-300 text-neutral-900 mx-1 mt-4" onClick={() => setNum(num + 10)}>Increment</button>
        <button className="rounded bg-amber-300 text-neutral-900 mt-4" onClick={() => setNum(num - 10)}>Decrement</button>
      </div>
    </div>
  )
}

export default Num;