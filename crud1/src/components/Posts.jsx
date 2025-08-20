import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi';

const Posts = () => {
  const [data,setData] = useState([]);

  const getPostsData = async () =>{
    const res = await getPost();
    console.log(res);
    setData(res.data);
  }
  useEffect(()=>{
    getPostsData();
  },[]);

  const handleDelete = async (id)=>{
    try{
      const res = await deletePost(id);
      if(res.status === 200){
        const newPost = data.filter((curPost)=>{
          return curPost.id !== id;
        })
        setData(newPost);
      }
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div>
      <section className='section-post'>
        <ul>
          {
            data.map((curElem) =>{
              const {id,body,title} = curElem;
              return <li key={id}>
                <p>{title}</p>
                <p>{body}</p>
                <button onClick={()=>handleDelete(id)}>Delete</button>
                <button>Edit</button>
              </li>
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Posts