import React, { useState, useEffect } from 'react';
import '../component/GraphPage.css';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function GraphImage() {
  const [stats, setStats] = useState({});
  const [departmentStatusStats, setDepartmentStatusStats] = useState({});
  const [projectsClosedDelay, setProjectsClosedDelay] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headerValue = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    axios.get('https://backend-bbi9.onrender.com/listings/stats', { headers: headerValue })
      .then((response) => {
        setStats(response.data);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headerValue = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    axios.get('https://backend-bbi9.onrender.com/listings/department-status-stats', { headers: headerValue })
      .then((response) => {
        setDepartmentStatusStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const currentDate = new Date();
    let count = 0;

    axios.get('https://backend-bbi9.onrender.com/listings', { headers: headerValue })
      .then((response) => {
        const projects = response.data.data;

        projects.forEach((project) => {
          console.log(project);
          const lastDate = new Date(project.lastDate);
          const timeDifference = lastDate - currentDate;
          const daysDifference = timeDifference / (1000 * 3600 * 24);

          if (daysDifference < 1 && project.status==="Running") {
            count += 1;
          }
        });

        setProjectsClosedDelay(count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dss = departmentStatusStats;

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: Object.keys(dss),
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Total',
        data: Object.keys(dss).map((department) =>
          dss[department].Closed +
          dss[department].Registered +
          dss[department].Running +
          dss[department].Cancelled
        ),
      },
      {
        name: 'Closed',
        data: Object.keys(dss).map((department) => dss[department].Closed),
      },
    ],
  };

  return (
    <>
      <div className="Graph-Page">
        <div className="box">
          <h4>Total Projects</h4>
          <p className="para-text">{stats.total}</p>
        </div>
        <div className="box">
          <h4>Closed</h4>
          <p className="para-text">{stats.Closed}</p>
        </div>
        <div className="box">
          <h4>Running</h4>
          <p className="para-text">{stats.Running}</p>
        </div>
        <div className="box">
          <h4>Closed Delay</h4>
          <p className="para-text">{projectsClosedDelay}</p>
        </div>
        <div className="box">
          <h4>Cancelled</h4>
          <p className="para-text">{stats.Cancelled}</p>
        </div>
      </div>
      <div className="chart-container">
        <p className="para">Department-Wise Success - Total Vs Closed</p>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </>
  );
}
