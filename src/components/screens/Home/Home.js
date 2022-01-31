 import CreditTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'
import React, { useState } from 'react'; 

const data = [
    {
        title: 'Learn React JS',
        isComplied: false,
        id: 1,
    },
    {
        title: 'Learn Next JS',
        isComplied: false,
        id: 2,
    },
    {
        title: 'Learn Unity3D',
        isComplied: false,
        id: 3,
    }
];

const Home = () => {
    const [todos, setTodos] = useState(data)
    const changeTodo =(id)=> {
      const copy = [...todos]
      const current =  copy.find(t=>t.id === id)
      current.isComplied = !current.isComplied;
      setTodos(copy)

    }
 
    const removeTodo = (id) => 
        setTodos([...todos].filter(t=>t.id !== id))
    

    
   

    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className = 'text-2xl font-bold text-center mb-10 '>ToDo simple static</h1>
            
            {todos.map((todo) => (
                <TodoItem 
                key={todo.id} 
                 todo={todo}
                 changeTodo={changeTodo}
                 removeTodo={removeTodo} />
            ))}

            <CreditTodoField setTodos={setTodos} /> 
        </div>
    );
}

export default Home
