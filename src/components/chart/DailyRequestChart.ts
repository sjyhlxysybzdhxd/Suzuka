import { Chart } from 'chart.js';
import type { ChartOptions } from 'chart.js';
import './chartSetup';

const createDailyRequestChart = (ctx: CanvasRenderingContext2D) => {
  const data = {
    labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
      {
        label: '每小时访问量',
        data: [50, 40, 35, 30, 25, 20, 15, 30, 45, 60, 80, 90, 100, 110, 120, 150, 130, 100, 90, 80, 70, 60, 55, 50],
        backgroundColor: 'rgba(99, 132, 255, 0.5)',
        borderColor: 'rgba(99, 132, 255, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: '访问请求量' },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `请求量: ${tooltipItem.raw}`,
        },
      },
      title: {
        display: true,
        text: '用户日热力图',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
    },
  };

  return new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
};

export default createDailyRequestChart;
