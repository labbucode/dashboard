import React, { useState } from 'react';
import './Sidebar.css';
import PlusIcon from '../assists/create-project.svg';
import BluePlusIcon from '../assists/create-project-active.svg';
import DashboardIcon from '../assists/Dashboard.svg';
import BlueDashboardIcon from '../assists/Dashboard-active.svg';
import ProjectListIcon from '../assists/Project-list.svg';
import BlueProjectListIcon from '../assists/Project-list-active.svg';
import LogoutIcon from '../assists/Logout.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
        <div className='sidebar-icons'>
          <div
            onClick={() => {
              navigate('/dashboard/graph');
            }}
            className={`sidebar-icon ${location.pathname === '/dashboard/graph' ? 'active' : ''}`}
          >
            <img src={location.pathname === '/dashboard/graph' ? BlueDashboardIcon : DashboardIcon} alt="Dashboard" />
          </div>

          <div
            onClick={() => {
              navigate('/dashboard/list');

            }}
            className={`sidebar-icon ${location.pathname === '/dashboard/list' ? 'active' : ''}`}
          >
            <img src={location.pathname === '/dashboard/list' ? BlueProjectListIcon : ProjectListIcon} alt="Project List" />
          </div>
          <div className='br-line'></div>
          <div

            onClick={() => {
              navigate('/dashboard/createproject');

            }}
            className={`sidebar-icon ${location.pathname === '/dashboard/createproject' ? 'active' : ''}`}
          >
            <img src={location.pathname === '/dashboard/createproject' ? BluePlusIcon : PlusIcon} alt="Create Project" />
          </div>
        </div>


        <div className="exit-icon">
          <MdOutlineLogout size={32} color="grey" src={LogoutIcon} onClick={() => {
            localStorage.removeItem('access');
            navigate('/');
          }} />
        </div>
      </div>


    </>
  );
}

export default Sidebar;
