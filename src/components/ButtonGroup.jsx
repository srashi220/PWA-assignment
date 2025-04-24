import React from 'react';
import { FaCheck, FaTimes, FaExclamationCircle } from 'react-icons/fa';

const ButtonGroup = () => {
  return (
    <div className="flex gap-4 justify-center items-center ">
      <button
        className="flex items-center px-6 py-2 bg-blue-700 text-black rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <FaCheck className="mr-2" /> 
        Approve Request
      </button>

      <button
        className="flex items-center px-6 py-2 bg-blue-500 text-black rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <FaExclamationCircle className="mr-2" />
        Needs Review      </button>

      <button
        className="flex items-center px-6 py-2 bg-red-500 text-black rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        <FaTimes className="mr-2" />
        Reject Submission      </button>
    </div>
  );
};

export default ButtonGroup;
