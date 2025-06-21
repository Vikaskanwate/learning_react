import { useState } from "react"
import { PostData } from "../api/PostApi"
export const Form = ({data,setData}) =>{
    const [addData,setAddData] = useState({
        title : "",
        body : "",
    })

    const handleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev => {
            console.log(prev,"Hi");
            return {
                ...prev,
                [name]: value,
            }
        }))
    }

    const addPostData = async() =>{
        const res = await PostData(addData);
        console.log(res)
        if(res.status === 201){
            setData([...data,res.data])
            setAddData({title:" ",body:" "});
        } 
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addPostData();
    }
    return (

        <div style={{height:"70px",display:"flex",alignItems:"center",justifyContent:"center"} }>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title">
                </label>
                <input type="text" 
                autoComplete="off"
                id="title"
                name="title"
                placeholder="Add Title"
                value={addData.title}
                onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text" 
                autoComplete="off"
                placeholder="Add Post"
                id="body"
                name="body"
                value={addData.body}
                onChange={handleInputChange}/>
            </div>
            <button type="submit">Add</button>
        </form>
        </div>
    )
} 