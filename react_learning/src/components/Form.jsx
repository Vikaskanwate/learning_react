import React, { useState } from 'react'
const Form = () => {
    
    const [formData,setFormData] = useState({
        name:'',
        email:''
    });
   

    function handleChange (e) {
        const {name,value} = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        setFormData((prevData)=>({
            ...prevData,
           [name]:value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("form submited: ",formData);
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name: </label>
            <input type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="">Email: </label>
            <input type="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}/>
        </div>
        <button type='submit'>Submit</button>
    </form>
  );
}

export default Form