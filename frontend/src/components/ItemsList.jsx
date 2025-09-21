import { useEffect,useState } from "react"
import { getItems } from "../services/api";
function ItemsList() {
    const [items,setItems] = useState([]);
    
    useEffect(() =>{
        getItems()
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    },[]);

    return (
        <>
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </>
    )
}