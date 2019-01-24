import React from 'react'
import Chart from 'react-apexcharts';
import { formatChartData } from '../../utils/format';

export default ({ edges }) => {
  const data = edges.map(edge => ({ x: edge.paid ? 'PAID' : 'UNPAID', y: edge.total }))
  const properties = formatChartData(data);
  const { series, options } = properties;

  return (
    <>
      <p className="my-5">Unpaid VS Paid amount</p>
      <Chart
        options={options}
        series={series}
        type="line"
        width={600}
        height={400}
      />
    </>
  )
}
