import React from 'react';

const Button = ({ name, size }) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-5 px-20 text-sm',
  };

  return (
    <button
      className={`bg-transparent border-4 border-white hover:bg-white text-white hover:text-black rounded-full font-bold transition-colors duration-300 ${sizeClasses[size]}`}
    >
      {name}
    </button>
  );
};

export default Button;
