import React from 'react';
import './style.css';

const Actor = ({ name, as }) => {
  return (
    <div>
      <span>{name}</span>
      <span> jako {as}</span>
    </div>
  );
};

export default Actor;
