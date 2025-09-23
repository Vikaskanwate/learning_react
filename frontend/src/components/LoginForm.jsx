import React, { useState } from 'react'

function LoginForm({onLogin}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await api.post('/login',{email,password});
            localStorage.setItem('token',res.data.token);
            onLogin(res.data.user)
        }catch(err){
            alert('Login failed');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" value={email} 
        onChange={e => setEmail(e.target.value)}
        placeholder='Email' 
        required/>
        <input type="password" value={password} 
        onChange={e.setPassword(e.target.value)}
        placeholder='password' 
        required/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm