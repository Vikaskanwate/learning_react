import React, { useState } from 'react'

const Posts = () => {
  const [data,setData] = useState([]);
  return (
    <div>
      <section className='section-post'>
        <ul>
          {
            data.map((curElem) =>{
              
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Posts