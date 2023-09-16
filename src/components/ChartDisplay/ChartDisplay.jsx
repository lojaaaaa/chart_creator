import React from 'react';
import { Bar, Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './ChartDisplay.module.scss'


function ChartDisplay({ data }) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {     
        fill: true,
        label: 'Данные',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: data.map(d => d.data),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Название графики',
      },
    },
  };

  return (
    <div className={styles.graphics}>
      <h2 className={styles.title}>Отображение графики</h2>
      {/* <Bar className={styles.graph} options={options} data={chartData} /> */}
      <Line className={styles.graph} options={options} data={chartData} />
    </div>
  );
}

export default ChartDisplay;
