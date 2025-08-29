import { useEffect, useState } from "react"
import { getPost } from "../api/PostApi";

export const Posts = ()=>{
    const [data,setData] = useState([]);
    
    const getPostData = async () =>{
        const res = await getPost();
        setData(res.data);
    }
    
    useEffect(()=>{
        getPostData();
    },[]);

    const handleDelete = async () =>{
        try{
            
        }catch(error){
            
        }
    }
    return (
        <>
            <section>
                <Form data={data} setData={setData}></Form>
            </section>
            <section className="section-post">
                <ul>
                    {
                        data.map((curElem)=>{
                            const {id,body,title} = curElem;
                            return <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                                <button>Edit</button>
                                <button onClick={()=>handleDelete(id)}>delete</button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}