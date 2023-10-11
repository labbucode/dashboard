// src/components/RateCharts.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RateCharts = () => {
  const chartData = [
    {
      department: 'Total',
      successRate: 70, // Success rate for the 'Strategy' department
      rejectRate: 0,  // Reject rate for the 'Strategy' department
    },
    {
      department: 'Closed',
      successRate: 36, // Success rate for the 'Finance' department
      rejectRate: 0,  // Reject rate for the 'Finance' department
    },
  ];

  useEffect(() => {
    // Fetch data from your server API
    // Replace 'apiEndpoint' with the actual API endpoint
    fetch('apiEndpoint')
      .then((response) => response.json())
      .then((data) => {
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Process the data to create the Highcharts options for success rate
  const successChartOptions = {
    chart: {
      type: 'bar',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: chartData.map((entry) => entry.department),
    },
    yAxis: {
      title: {
        text: 'Success Rate',
      },
    },
    series: [
      {
        name: 'Success Rate',
        data: chartData.map((entry) => entry.successRate),
      },
    ],
  };

  
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={successChartOptions} />
    </div>
  );
};

export default RateCharts;
