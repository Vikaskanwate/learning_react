import React, { useState } from 'react'
import '../App.css'
const ThemeToggle = () => {
    const [darkMode , setDarkMode] = useState(false);

    const toogleTheme = () =>{
        setDarkMode(prev => !prev)
    }

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
        <button onClick={toogleTheme} className='btn'>Switch to light or dark</button>
        <h1>Hello, React!</h1>
        <p>This is a theme toggle example.</p>
    </div>
  )
}

export default ThemeToggle