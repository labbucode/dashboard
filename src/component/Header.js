// Header.js

import React from 'react';
import './Header.css';
import Logo from '../assists/Logo.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { useHeader } from '../HeaderContext';

function Header() {
  const { title } = useHeader(); // Access the title from the context

  return (
    <header className="header">
      <div className="text">
        <FaArrowLeft />
        <p className="text-para">{title}</p>
      </div>

      <img className="Logo-img" src={Logo} />
    </header>
  );
}

export default Header;
