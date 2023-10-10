import React from 'react';
import './Header.css'; // Create a CSS file for styling
import Logo from '../assists/Logo.svg';
// import headerbg from '../assists/Header-bg.svg'
import { FaArrowLeft } from 'react-icons/fa';
import Oval from '../assists/Oval.svg';

function Header() {
  return (
    <header className="header">
       {/* <img src={Oval} className='oval' /> */}
     
      {/* <img src={headerbg} /> */}
      <div className='text'>
<FaArrowLeft />
  <p className='text-para'>Create Project</p> 
</div>

<img className="Logo-img"  src={Logo} /> 
    </header>
  );
}

export default Header;



 


