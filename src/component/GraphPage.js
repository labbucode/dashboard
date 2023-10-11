import React, { useState, useEffect } from 'react'
import '../component/GraphPage.css'
import RateCharts from './RateCharts'
import axios from 'axios'

export default function GraphImage() {

  const [stats,setStats] = useState({});

  useEffect(() => {
    axios.get('https://backend-bbi9.onrender.com/listings/stats')
    .then((response) => setStats(response.data));
  },[])

  return (
    <>
    <div className='Graph-Page'>
        <div className="box">
          <h4>Total Projects</h4>
          <p className='p'>{stats.total}</p>
        </div>
        <div className="box">
          <h4>Closed</h4>
          <p className='p'>{stats.Closed}</p>
        </div>
        <div className="box">
          <h4>Running</h4>
          <p className='p'>{stats.Running}</p>
        </div>
        <div className="box">
          <h4>Closure Delay</h4>
          <p className='p'>{stats.Closed}</p>
        </div>
        <div className="box">
          <h4>Cancelled</h4>
          <p className='p'>{stats.Cancelled}</p>
        </div>      
    </div>
    <div>
        <h4>Department wise - Total Vs Closed</h4>
        <div className='Graph-Container'>
        <RateCharts />
        </div>
    </div>
    </>
  )
}
