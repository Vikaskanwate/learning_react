import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');
    const handleOnSubmit = e =>{
        e.preventDefault();
        if(!value.trim()) return;
        addTodo(value);
        setValue('');
    }
    return (
        <div className="w-fit bg-amber-200 rounded" >
            <form action="" onSubmit={handleOnSubmit}>
                <input type="text" className="bg-blue-900 text-3xl p-3" placeholder="enter your todo" 
                value={value}
                onChange={e=>setValue(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;