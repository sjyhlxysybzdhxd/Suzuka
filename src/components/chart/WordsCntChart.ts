import { Chart } from 'chart.js';
import type { ChartOptions } from 'chart.js';
import './chartSetup';

const createWordsCntChart = (ctx: CanvasRenderingContext2D) => {
  const data = {
    labels: ['四级单词 50%', '基本单词 30%', '六级单词 20% '],
    datasets: [
      {
        label: '单词占比',
        data: [30, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ] as string[],
        hoverOffset: 20,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 10,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          boxWidth: 20,
          boxHeight: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: '单词分布',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#333',
      },
    },
  };

  const cntTotalPlugin = {
    id: 'totalText',
    beforeDraw(chart:any) {
      const { ctx } = chart;
      ctx.save();
      const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'left';  
      ctx.textBaseline = 'top';  
      ctx.fillText(`总数: ${total}`, 10, 10);  
      ctx.restore();
    },
  };

  return new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
    plugins: [cntTotalPlugin],  
  });
};

export default createWordsCntChart;
