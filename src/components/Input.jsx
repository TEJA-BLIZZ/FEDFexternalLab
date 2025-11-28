import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, style, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      className={className}
      {...props}
    />
  );
};

export default Input;