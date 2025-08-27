import { useState } from "react"

export const Posts = ()=>{
    const [data,setData] = useState([]);
    
    return (
        <>
            <section>
                {/* <Form data={data}></Form> */}
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
                                <button>delete</button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}