import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi';

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
                <button>Add</button>
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