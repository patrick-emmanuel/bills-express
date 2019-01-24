export const formatMoney = (amount) => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
}

export const formatChartData = (data, arraySeries = false) => {
  if (!arraySeries) {
    data = { data }
  }
  return {
    options: {
      chart: {
        id: 'type-amount-chart'
      },
      fill: {
        colors: ['#4dc0b5', '#E91E63', '#9C27B0']
      }
    },
    series: [
      data
    ]
  }
}