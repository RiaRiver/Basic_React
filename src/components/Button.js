import React from 'react';

const Button = ({text, sectionName}) => (
  <button className={`btn ${sectionName}-btn`}>
    <span>{text}</span>
  </button>
)

export default Button;