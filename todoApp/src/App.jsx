import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (stored) setTodos(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="flex items-center justify-center h-55">
            <div>
                {todos.map((todo, index) => {
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                })}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default App;