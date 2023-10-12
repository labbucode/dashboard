import React, { useState, useEffect } from 'react'
import '../component/GraphPage.css'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function GraphImage() {

  const [stats,setStats] = useState({});

  useEffect(() => {
    axios.get('https://backend-bbi9.onrender.com/listings/stats')
    .then((response) => setStats(response.data));
  },[])


  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {

    const projectData = [
      { department: 'Total', status: 'Closed' },
      { department: 'Closed', status: 'Closed' },
      { department: 'closed', status: 'Open' },
      { department: 'Total', status: 'Closed' },
      { department: 'Total', status: 'Closed' },
      { department: 'closed', status: 'Open' },
    ];

    
    const departmentSuccess = {};
    const totalProjectsByDepartment = {};
    const closedProjectsByDepartment = {};

    projectData.forEach((project) => {
      const department = project.department;
      totalProjectsByDepartment[department] = (totalProjectsByDepartment[department] || 0) + 1;
      if (project.status === 'Closed') {
        closedProjectsByDepartment[department] = (closedProjectsByDepartment[department] || 0) + 1;
      }
    });

    for (const department in totalProjectsByDepartment) {
      const totalProjects = totalProjectsByDepartment[department];
      const closedProjects = closedProjectsByDepartment[department];
      departmentSuccess[department] = (closedProjects / totalProjects) * 100;
    }


    const chartData = Object.keys(departmentSuccess).map((department) => ({
      name: department,
      y: departmentSuccess[department],
    }));

    const options = {
      chart: {
        type: 'column',
      },

      title: {
        text: '',
      },

      xAxis: {
        categories: Object.keys(departmentSuccess),
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      series: [
        {
          name: '',
          
        },
      ],
    };

    setChartOptions(options);
  }, []);

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
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    </div>
    </>
  )
}
