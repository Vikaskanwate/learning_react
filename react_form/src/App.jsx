import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card";
import Header from "./components/Header"
import { Route,Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import H from "./pages/H";
import Services from "./pages/Services"
import React from 'react';


// const App = ()=>{
//   const [username,setUsername] = useState('');
//   const submitHandler =(e)=>{
//     e.preventDefault();
//     console.log(username);
//     setUsername('');
//   }
//   const users = [
//     {
//       "name": "Alice Johnson",
//       "city": "New York",
//       "age": 28,
//       "profession": "Software Engineer",
//       "profile_photo": "https://example.com/photos/alice.jpg"
//     },
//     {
//       "name": "Bob Smith",
//       "city": "Los Angeles",
//       "age": 35,
//       "profession": "Graphic Designer",
//       "profile_photo": "https://example.com/photos/bob.jpg"
//     },
//     {
//       "name": "Charlie Brown",
//       "city": "Chicago",
//       "age": 40,
//       "profession": "Teacher",
//       "profile_photo": "https://example.com/photos/charlie.jpg"
//     },
//     {
//       "name": "Diana Miller",
//       "city": "San Francisco",
//       "age": 30,
//       "profession": "Data Scientist",
//       "profile_photo": "https://example.com/photos/diana.jpg"
//     },
//     {
//       "name": "Evan Davis",
//       "city": "Seattle",
//       "age": 25,
//       "profession": "Marketing Specialist",
//       "profile_photo": "https://example.com/photos/evan.jpg"
//     }
//   ]  
//   return (
//     <>
//     <Navbar/>
//     {/* <div className="flex items-center justify-center form-div">
//       <form 
//       onSubmit={(e)=>{
//         submitHandler(e);
//       }}>
//         <input 
//         value={username}
//         onChange={(e)=>{
//           // console.log(e.target.value);
//           setUsername(e.target.value)
//         }}
//         className="text-center  rounded bg-green-600 text-3xl py-4" type="text" placeholder="enter your name"/>
//         <button 
//         className="rounded bg-blue-500 text-2xl px-5 py-2 block mt-5">Submit</button>
//       </form>
//     </div> */}
//     <div className="flex aling-center justify-center">
//       {users.map(function(elem,idx){
//         return <Card key= {idx} user ={elem.name} city = {elem.city} age = {elem.age} photo = {elem.profile_photo}/>
//       })}
//     </div>
//     <Footer/>
//     </>
//   )
// }


// code for routing  
const App = ()=>{
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<H/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
    </div>
  )
}
export default App
