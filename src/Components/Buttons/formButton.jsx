import React from 'react'

const FormButton = ({ name, size, className }) => {
const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-8 text-sm',
  };

  return (
    <button
      className={`${sizeClasses[size]} ${className}`}
    >
      {name}
    </button>
  );
};

export default FormButton
