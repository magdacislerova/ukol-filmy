import React from 'react';
import './style.css';
import camera from './img/camera.svg';

const Header = () => {
  return (
    <h1>
      <img className="logo" src={camera} alt="Logo" />V našem kině právě uvádíme
    </h1>
  );
};

export default Header;
