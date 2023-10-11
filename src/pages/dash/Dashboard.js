import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import '../../CreateProject.css'


export default function Dashboard() {
  return (

    <div className='project-page'>
      <div className='left-column'>
        <Sidebar />
      </div>
      <div className='right-column'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
