import React from 'react';
import { Bar, Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './ChartDisplay.module.scss'


function ChartDisplay({ data }) {
  const chartData = {
    title: 'fdfdf',
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      { 
        label: 'Данные',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [1, 2, 7, 4, 3, 9],
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
      <Bar  className={styles.graph} options={options} data={chartData} />
    </div>
  );
}

export default ChartDisplay;
