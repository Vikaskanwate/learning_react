import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
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
      if(res === 200){
        const newPost = data.filter((curPost)=>{
          return curPost.id === id;
        })
        setData(newPost);
      }
    }catch(error){
      console.log(error);
    }
    
  }

  useEffect(() => {
    getPostData();
  });
  return(
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
  )
};
