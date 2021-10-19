import React from 'react';
import './style.css';

const Actor = ({ name, as }) => (
  <div className="actor">
    <div className="name">{name}</div>
    <div className="role">
      {' '}
      jako <span className="character">{as}</span>
    </div>
  </div>
);
export default Actor;
