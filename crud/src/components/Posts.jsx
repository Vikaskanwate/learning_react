import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";
export const Posts = () => {

  const [data,setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    setData(res.data)
  };

  const handleDelete = async (id) =>{
    try{
      const res = await deletePost(id);
      if(res.status === 200){
        const newPost = data.filter((curPost)=>{
          return curPost.id !== id;
        })
        setData(newPost);
      }else{
        console.log("Failed to delete the post: ",res.status);
      }
    }catch(error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    getPostData();
  },[]);
  return(
    <>
    <section>
      <Form data={data} setData={setData}/>
    </section>
    <section className="section-post">
      <ul>
        {
          data.map((curElem) => {
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
};
