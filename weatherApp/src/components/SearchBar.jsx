import { useState } from "react";
import {Search} from 'lucide-react'

export default function SearchBar({onSearch}) {
    const [input,setInput] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input.trim()) return;
        onSearch(input.trim());
    };
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" 
            placeholder="Search for a city" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit">
                <Search size={18}></Search>
            </button>
        </form>
    )
}