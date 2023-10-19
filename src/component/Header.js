import React from 'react';
import './Header.css';
import Logo from '../assists/Logo.svg';
import LogoutIcon from '../assists/Logout.svg';
import Oval from '../assists/Oval.svg';
import { FaArrowLeft } from 'react-icons/fa';
import CreateProject from '../CreateProject';
import { useLocation } from 'react-router-dom';

function Header() {
 // const { title } = useHeader();
  const location = useLocation();
  const currUrl = location.pathname;
  const parts = currUrl.split('/');
  const lastPart = parts[parts.length-1];

 const title = lastPart === "list" ? "Project List": lastPart === "graph" ? "Dashboard" : "Create Project";
  return (
    <header className="header">
      <div className="text">
        <FaArrowLeft />
        <p className="text-para">{title}</p>
      </div>

      {/* <img className="Logo-oval" src={Oval} /> */}
      <img className="Logo-logout-icon" src={LogoutIcon} />
      <img className="Logo-img" src={Logo} />
    </header>
  );
}

export default Header;
