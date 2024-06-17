"use client";
import React from 'react';

const Button = ({ children, onClick, className })  => {
  return (
    <button
      className={`bg-purple border-solid border-2 border-secondary text-secondary font-bold py-2 px-6 rounded-lg hover:text-white cursor-pointer whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;