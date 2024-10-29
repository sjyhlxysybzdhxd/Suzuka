import { Chart } from 'chart.js';
import type { ChartOptions } from 'chart.js';
import './chartSetup';

const createTimelyCompletionChart = (ctx: CanvasRenderingContext2D) => {
  const data = {
    labels: ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04', '2024-10-05', '2024-10-06', '2024-10-07'],
    datasets: [
      {
        label: '按时完成任务人数',
        data: [20, 25, 23, 28, 30, 26, 29],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: '未按时完成任务人数',
        data: [5, 8, 7, 4, 3, 6, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: { display: true, text: '人数' },
        beginAtZero: true,
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
    },
  };

  return new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
};

export default createTimelyCompletionChart;
