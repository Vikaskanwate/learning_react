import React, { useEffect, useState } from 'react'
import { addStudent, getStudents } from '../services/StudentService';

const Student = () => {

  const [students,setStudents] = useState([]);
  const [name,setName] = useState("");
  const [department,setDeparment] = useState("");
  const [course,setCourse] = useState("");

  useEffect(()=>{
    loadStudent();
  },[]);

  const loadStudent = async () => {
    const res = await getStudents();
    setStudents(res.data);
  }

  const handleAdd = async () => {
    await addStudent({name,department,course});
    loadStudent();
  }

  return (
    <div>
      <h1>Students</h1>
      <div>

      <input placeholder='Name' onChange={(e)=>setName(e.target.value)} />
      <input placeholder='Department' onChange={(e)=>setDeparment(e.target.value)} />
      <input placeholder='Course' onChange={(e)=>setCourse(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {students.map((s)=>(
          <li key={s.id}>
            {s.name} - {s.department} - {s.course}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Student