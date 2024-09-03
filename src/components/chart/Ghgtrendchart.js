import React from 'react';
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';

const LineChartComponent = () => {
  const data = [
    { group: '目標', date: '2020', value: 500 },
    { group: '目標', date: '2021', value: 450 },
    { group: '目標', date: '2022', value: 400 },
    { group: '目標', date: '2023', value: 350 },
    { group: '目標', date: '2024', value: 300 },
    { group: '實際值', date: '2020', value: 520 },
    { group: '實際值', date: '2021', value: 480 },
    { group: '實際值', date: '2022', value: 430 },
    { group: '實際值', date: '2023', value: 370 },
    { group: '實際值', date: '2024', value: 310 },
  ];

  const options = {
    title: '溫室氣體排放數值',
    axes: {
      bottom: {
        title: '年份',
        mapsTo: 'date',
        scaleType: 'labels',
      },
      left: {
        title: '排放量',
        mapsTo: 'value',
        scaleType: 'linear',
      },
    },
    height: '400px',
  };

  return <LineChart data={data} options={options} />;
};

export default LineChartComponent;
