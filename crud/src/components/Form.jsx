import { useEffect, useState } from "react"
import { PostData, updateData } from "../api/PostApi"
export const Form = ({data,setData,updateDataApi,setUpdateDataApi}) =>{
    const [addData,setAddData] = useState({
        title : "",
        body : "",
    })

    useEffect(()=>{
        updateDataApi && 
            setAddData({
                title: updateDataApi.title || "",
                body : updateDataApi.body || ""
            })
    },[updateDataApi]);

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

    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id,addData);
            console.log(res);

            setData((prev)=>{
                return prev.map((curElem)=>(
                    curElem.id === res.id ? res.data : curElem
                ))
            })
        } catch (error) {
            
        }
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        addPostData();
        const action = e.nativeEvent.submitter.value;
        if(action === "Add"){
            addPostData();
        }else if(action === "Edit"){
            updatePostData();
        }
    }

    let isEmpty = Object.keys(updateDataApi).length === 0;
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
            <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
        </form>
        </div>
    )
} 