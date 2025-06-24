import React, { useState } from "react";

function Login({handleLogin}) {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        
        handleLogin(email,password);

        setEmail("");
        setPassword("");
    }


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-10 rounded-2xl">
        <form onSubmit={(e)=>submitHandler(e)}
        className="flex h-50 flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required
            className="border-2 text-center p-1 border-emerald-600 rounded-full text-xl text-white"
            type="email"
            placeholder="Enter the email"
          />
          <input
            value={password}
            onChange={(e)=> {
                setPassword(e.target.value)
            }}
            required
            className="mt-3 p-1 text-center border-2 border-emerald-600 rounded-full text-xl text-white"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 w-60 border-none outline-none pr-4 pl-4 pt-1 pb-2 bg-emerald-600 rounded-full text-xl text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
