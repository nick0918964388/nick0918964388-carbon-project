import React from 'react';
import { GaugeChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';

const Ghggaugechart = ({ value, reduction }) => {
  const data = [
    {
      group: 'value',
      value: value,
    },
    {
      group: 'delta',
      value: -13.37
    }
  ];

  const options = {
    title: '溫室氣體2030年總目標達成率',
    resizable: false,
    gauge: {
      type: 'full',
      status: 'success',
    },
    height: '200px',
  };

  return (
    <div>
      <GaugeChart data={data} options={options} />
    </div>
  );
};

export default Ghggaugechart;
