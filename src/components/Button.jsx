import React from 'react';

const Button = ({ text, onClick, style, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;