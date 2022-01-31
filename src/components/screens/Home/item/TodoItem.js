import React from 'react';
import Checkbox from './Checkbox';
import cn from 'classnames';
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo, removeTodo}) => {
    return (
        <div
            className='flex items-center justify-between mb-4 w-full 
            rounded-2xl bg-gray-800 p-5'
        >
            <button
                className='flex items-center'
                onClick={() => changeTodo(todo.id)}
            >
                <Checkbox isComplied={todo.isComplied} />

                <span className={cn({ 'line-through': todo.isComplied })}>
                    {todo.title}
                </span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash
                    size={22}
                    className='text-gray-600 hover:text-red-900 transition-colors ease-in-out duration-300'
                />
            </button>
        </div>
    );
       
};

export default TodoItem;
