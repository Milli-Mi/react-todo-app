import React from 'react';
import Checkbox from './Checkbox'


const TodoItem = ({todo}) => {
  return <button className = 'flex items-center mb-4 w-full rounded-2xl bg-gray-800 p-3'>
      < Checkbox />
      {todo.title}</button>;
};

export default TodoItem;
