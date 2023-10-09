import React from 'react';
import './Header.css'; // Create a CSS file for styling
import Logo from '../assists/Logo.svg';
import { FaArrowLeft } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className='text'>
<FaArrowLeft />
  <p className='text-para'>Create Project</p> 
</div>

<img className="Logo-img"  src={Logo} /> 
    
    </header>
  );
}

export default Header;

{/* <div className='text'>
<FaArrowLeft />
  <p className='text-para'>Create Project</p> 
</div>

<img className="Logo-img"  src={Logo} />  */}

 


