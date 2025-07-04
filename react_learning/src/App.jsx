import Form from "./components/Form"
import Num from "./components/Num"
import Card from './components/Card'
import List from "./components/List"
import { useState } from "react"
const  App = () => {
  const [loggedIn,isLoggledIn] = useState('');
  return (
    <div>
      {/* <Form/> */}
      {/* <Card></Card> */}
      {/* <List></List> */}
      {isLoggledIn && <Card/>}
    </div>
  )
} 
export default App