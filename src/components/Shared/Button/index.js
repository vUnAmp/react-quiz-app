import React from 'react';

const Button = ({ children, ...otherProps }) => {
  return <button className="button">{children}</button>;
};

export default Button;
