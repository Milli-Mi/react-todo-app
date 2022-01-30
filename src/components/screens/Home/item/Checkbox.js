import React from 'react';
import { BsCheck } from 'react-icons/bs';
const Checkbox = ({isComplied}) => {
  return (
      <div className="border-3 rounded-lg mr-3 border-pink-400 w-6 h-6">
          {
              isComplied && <BsCheck size = {24} className = "text-gray-900"/>}
      </div>
  );
};

export default Checkbox;
