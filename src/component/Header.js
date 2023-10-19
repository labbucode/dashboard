import React from 'react';
import './Header.css';
import Logo from '../assists/Logo.svg';
import LogoutIcon from '../assists/Logout.svg';
import Oval from '../assists/Oval.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { useHeader } from '../HeaderContext';
import CreateProject from '../CreateProject';

function Header() {
  const { title } = useHeader();

  return (
    <header className="header">
      <div className="text">
        <FaArrowLeft />
        <p className="text-para">{title || "Create Project"}</p>
      </div>

      {/* <img className="Logo-oval" src={Oval} /> */}
      <img className="Logo-logout-icon" src={LogoutIcon} />
      <img className="Logo-img" src={Logo} />
    </header>
  );
}

export default Header;
