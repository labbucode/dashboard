import React from 'react';
import './Sidebar.css';
import PlusIcon from '../assists/create-project.svg';
import BluePlusIcon from '../assists/create-project-active.svg';
import DashboardIcon from '../assists/Dashboard.svg';
import BlueDashboardIcon from '../assists/Dashboard-active.svg';
import ProjectListIcon from '../assists/Project-list.svg';
import BlueProjectListIcon from '../assists/Project-list-active.svg';
import LogoutIcon from '../assists/Logout.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHeader } from '../HeaderContext';

function Sidebar() {
  const navigate = useNavigate();
  const { setTitle } = useHeader();
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
        <div className='sidebar-icons'>
        <div
          onClick={() => {
            navigate('/dashboard/graph');
            setTitle('Dashboard');
          }}
          className={`sidebar-icon ${location.pathname === '/dashboard/graph' ? 'active' : ''}`}
        >
          <img src={location.pathname === '/dashboard/graph' ? BlueDashboardIcon : DashboardIcon} alt="Dashboard" />
        </div>

        <div
          onClick={() => {
            navigate('/dashboard/list');
            setTitle('Project List');
          }}
          className={`sidebar-icon ${location.pathname === '/dashboard/list' ? 'active' : ''}`}
        >
          <img src={location.pathname === '/dashboard/list' ? BlueProjectListIcon : ProjectListIcon} alt="Project List" />
        </div>

        <div
          onClick={() => {
            navigate('/dashboard/createproject');
            setTitle('Create Project');
          }}
          className={`sidebar-icon ${location.pathname === '/dashboard/createproject' ? 'active' : ''}`}
        >
          <img src={location.pathname === '/dashboard/createproject' ? BluePlusIcon : PlusIcon} alt="Create Project" />
        </div>
        </div>


        <div className="exit-icon">
        <img
          onClick={() => {
            localStorage.removeItem('access');
            navigate('/');
          }}
          src={LogoutIcon}
          alt="Logout"
        />
      </div>
      </div>

      
    </>
  );
}

export default Sidebar;
