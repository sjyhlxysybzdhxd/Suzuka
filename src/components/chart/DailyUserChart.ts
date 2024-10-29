
import { Chart } from 'chart.js';
import type { ChartOptions } from 'chart.js';
import './chartSetup'; 

const createDailyUserChart = (ctx: CanvasRenderingContext2D) => {
  const data = {
    labels: ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04', '2024-10-05', '2024-10-06', '2024-10-07'],
    datasets: [
      {
        label: '活跃用户',
        data: [10, 20, 15, 30, 25, 40, 35], 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: '新用户',
        data: [5, 10, 8, 15, 12, 20, 18], 
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '流失用户',
        data: [2, 5, 3, 4, 6, 2, 1], 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: '用户数' },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: '每日用户统计',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
    },
  };

  return new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
};

export default createDailyUserChart;
