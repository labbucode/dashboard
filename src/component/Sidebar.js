import React from 'react';
import './Sidebar.css'; 
import PlusIcon from '../assists/create-project.svg';
import BluePlusIcon from '../assists/create-project-active.svg';
import DashboardIcon from '../assists/Dashboard.svg';
import BlueDashboardIcon from '../assists/Dashboard-active.svg';
import ProjectListIcon from '../assists/Project-list.svg';
import BlueProjectListIcon from '../assists/Project-list-active.svg';
import LogoutIcon from '../assists/Logout.svg';

function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar-icon">
        <img src={DashboardIcon} />
      </div>
      <div className="sidebar-icon">
      <img src={ProjectListIcon} />
      </div>
      <div className="sidebar-icon">
        <img src={PlusIcon} />
      </div>
    </div>
      <div className="exit-icon">
      <img src={LogoutIcon} />
      </div>
      </>
  );
}

export default Sidebar;
