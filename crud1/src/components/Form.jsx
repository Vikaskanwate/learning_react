import { useState } from "react"
import { PostData } from "../api/PostApi";

export const Form = ({ data, setData }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })

    const handleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData((prev =>{
            return {
                ...prev,
                [name]:value,
            }
        }))
    } 

    const addPostData = async ()=>{
        const res = await PostData(addData);
        if(res.status === 201){
            setData([...data,res.data]);
            setAddData({title:"",body:""});
        }
    }
    return (
        
        <div security={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" } }>
            <form action="" >
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" 
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add title"
                    value={addData.title}
                    onChange={handleInputChange}
                    />
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
                <button type="submit" value="Add">Add</button>
            </form>
        </div>
    )
}