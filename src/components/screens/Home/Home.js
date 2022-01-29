import React from 'react';
import TodoItem from './TodoItem'

const todos = [
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
    return (
        <div className='bg-gray-900 h-screen text-white'>
            
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default Home
