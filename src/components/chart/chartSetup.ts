import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// 注册所有控制器和插件
Chart.register(...registerables);
Chart.register(ChartDataLabels);

export { Chart };
