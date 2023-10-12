import React, { useState, useEffect } from 'react'
import '../component/GraphPage.css'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';




export default function GraphImage() {

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Department-Wise Success Percentage of Projects',
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May'],
    },
    yAxis: {
      title: {
        text: 'Success Percentage',
      },
      min: 0,
      max: 100,
    },
    series: [
      {
        name: 'Department A (Total Target)',
        data: [80, 75, 90, 88, 78],
      },
      {
        name: 'Department A (Complete Target)',
        data: [70, 68, 80, 82, 75],
      },
      // Add series for other departments in a similar format
    ],
  };

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
        <div className="chart-container">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </div>
    </>
  )
}
