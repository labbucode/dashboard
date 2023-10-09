import React from 'react'

import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import CreateProjectContainer from '../../component/CreateProjectContainer'
//import CreateProjectContainer from './component/CreateProjectContainer'


export default function Dashboard() {
  return (
  
    <div className='project-page'>
        <div className='left-column'>
        <Sidebar />
        </div>
        <div className='right-column'>
        <Header />
        <CreateProjectContainer />
        </div>
    </div>
  )
}
