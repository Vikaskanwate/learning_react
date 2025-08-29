import React, { useState } from 'react'

const Form = ({data,setData}) => {
 
  const [addData,setAddData] = useState({
    title : "",
    body :""
  })

  return (
    <div style={{height:"70px",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" 
          autoComplete='off'
          name="title" 
          id="title"
          placeholder='Add Title' 
          value={addData.title}
          onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="body"></label>
          <input type="text" 
          autoComplete='off'
          name="body" 
          id="body"
          placeholder='Add body' 
          value={addData.body}
          onChange={handleInputChange}/>
        </div>
        <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default Form