import React, { useState, useEffect } from 'react'
import '../component/GraphPage.css'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function GraphImage() {

  const [stats,setStats] = useState({});

  useEffect(() => {
    const token =  localStorage.getItem('token');
    const headerValue = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    axios.get('https://backend-bbi9.onrender.com/listings/stats', {headers:headerValue})
    .then((response) => setStats(response.data));
  },[])

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [''],
    },
    yAxis: {
      title: {
        text: 'Success Percentage',
      },
      min: 0,
      max: 20,
    },
    series: [
      {
        name: 'Total',
        data: [ stats.total],
      },
      {
        name: 'Closed',
        data: [stats.Closed],
      },
      {
        name: 'Running',
        data: [stats.Running],
      },
      
      
    ],
  };

  

  return (
    <>
    <div className='Graph-Page'>
        <div className="box">
          <h4>Total Projects</h4>
          <p className='para-text'>{stats.total}</p>
        </div>
        <div className="box">
          <h4>Closed</h4>
          <p className='para-text'>{stats.Closed}</p>
        </div>
        <div className="box">
          <h4>Running</h4>
          <p className='para-text'>{stats.Running}</p>
        </div>
        <div className="box">
          <h4>Cancelled</h4>
          <p className='para-text'>{stats.Cancelled}</p>
        </div> 
        <div className="box">
          <h4>Closed Delay</h4>
          <p className='para-text'>{stats.Closed}</p>
        </div>
             
    </div>
    <div className="chart-container" >
    <p className='para'>Department-Wise Success - Total Vs Closed</p>
        <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </div>
    </>
  )
}
