import React from 'react';
import './Header.css';
import Logo from '../assists/Logo.svg';
import LogoutIcon from '../assists/Logout.svg';
import { useLocation, useNavigate} from 'react-router-dom';
import HeaderBg from '../assists/Header-bg.svg'
import { MdOutlineLogout, MdKeyboardArrowLeft } from 'react-icons/md';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currUrl = location.pathname;
  const parts = currUrl.split('/');
  const lastPart = parts[parts.length-1];

 const title = lastPart === "list" ? "Project List": lastPart === "graph" ? "Dashboard" : "Create Project";

 const handleGoBack = () => {
  navigate(-1);
};

  return (
    <header className="header">
      <div className="text">
      <MdKeyboardArrowLeft size={26} color="white" className="arrow-icon" onClick={handleGoBack} />
        <p className="text-para">{title}</p>
      </div>
     
          <MdOutlineLogout size={32} color="white" className="Logo-logout-icon" src={LogoutIcon} onClick={() => {
            localStorage.removeItem('access');
            navigate('/');
          }} />

      <img className="Logo-img" src={Logo} />
    </header>
  );
}

export default Header;
