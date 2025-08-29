import React, { useState } from 'react'
import {postData} from '../api/PostApi'
const Form = ({data,setData}) => {
 
  const [addData,setAddData] = useState({
    title : "",
    body :""
  })

  const handleInputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev =>{
      return {
        ...prev,
        [name]:value,
      }
    }))
  }

  const addPostData = async ()=>{
    const res = await postData(addData);
    console.log(res);
    if(res.status === 201){
      setData([...data,res.data])
      setAddData({title:"",body:""});
    }
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    addPostData();
  }
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
          placeholder='Add post' 
          value={addData.body}
          onChange={handleInputChange}/>
        </div>
        <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default Form