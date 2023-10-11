import React from 'react';
import './Sidebar.css';
import PlusIcon from '../assists/create-project.svg';
import BluePlusIcon from '../assists/create-project-active.svg';
import DashboardIcon from '../assists/Dashboard.svg';
import BlueDashboardIcon from '../assists/Dashboard-active.svg';
import ProjectListIcon from '../assists/Project-list.svg';
import BlueProjectListIcon from '../assists/Project-list-active.svg';
import LogoutIcon from '../assists/Logout.svg';
import { useNavigate, NavLink } from 'react-router-dom';
import { useHeader } from '../HeaderContext';

function Sidebar() {
  const navigate = useNavigate();
  const { setTitle } = useHeader(); 

  return (
    <>
      <div className="sidebar">
        <NavLink
          to="/dashboard/graph"
          className={({ isActive }) => {
            if (isActive) {
              setTitle('Dashboard');
            }
            return isActive ? 'active' : ' ';
          }}
        >
          <div className="sidebar-icon">
            <img src={DashboardIcon} />
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/list"
          className={({ isActive }) => {
            if (isActive) {
              setTitle('Project List'); 
            }
            return isActive ? 'active' : ' ';
          }}
        >
          <div className="sidebar-icon">
            <img src={ProjectListIcon} />
          </div>
        </NavLink>

        <NavLink
          to="/dashboard/createproject"
          className={({ isActive }) => {
            if (isActive) {
              setTitle('Create Project'); 
            }
            return isActive ? 'active' : ' ';
          }}
        >
          <div className="sidebar-icon">
            <img src={PlusIcon} />
          </div>
        </NavLink>
      </div>

      <div className="exit-icon">
        <img
          onClick={() => {
            localStorage.removeItem('access');
            navigate('/');
          }}
          src={LogoutIcon}
        />
      </div>
    </>
  );
}

export default Sidebar;
