import React from 'react';

const Card = ({ title, content, style, className, ...props }) => {
  return (
    <div style={style} className={className} {...props}>
      {title && <h3>{title}</h3>}
      <p>{content}</p>
    </div>
  );
};

export default Card;