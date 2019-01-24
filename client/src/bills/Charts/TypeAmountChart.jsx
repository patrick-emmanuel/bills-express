import React from 'react'
import Chart from 'react-apexcharts';
import { formatChartData } from '../../utils/format';

export default ({ edges }) => {
  const data = edges.map(edge => ({ x: edge.type, y: edge.total }))
  const properties = formatChartData(data);
  const { options, series } = properties;

  return (
    <>
      <p className="mb-5">Amount on various bills:</p>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={600}
        height={400}
      />
    </>
  )
}
