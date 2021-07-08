import React from 'react';

const Button = ({ showMore }) => {
 return (
  <button className="Button" onClick={() => showMore()}>
   Show More
  </button>
 );
};

export default Button;