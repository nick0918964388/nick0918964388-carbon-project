import React from 'react';
import { DonutChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';

const GhgDonutChart = () => {
  const data = [
    { group: 'CO2', value: 60 },
    { group: 'N2O', value: 25 },
    { group: 'CH4', value: 15 },
  ]
  const options = {
    title: '溫室氣體排放比例',
    resizable: true,
    donut: {
      center: {
        label: '排放比例',
      },
    },
    height: '400px',
  };

  return <DonutChart data={data} options={options} />;
};

export default GhgDonutChart;
