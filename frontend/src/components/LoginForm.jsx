import React from 'react'

function LoginForm() {
  return (
    // <div>LoginForm</div>
    <form >
        <h2>Login</h2>
        <input type="email" value={email} required/>
        <input type="password" value={password} />
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm