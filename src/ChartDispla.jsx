import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import ChartExport from './ChartExport'; 

function ChartDisplay({ data }) {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Данные',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data,
      },
    ],
  };



  return (
    <div>
      <h2>Отображение графика</h2>
      <div>
        <Bar data={chartData} />
      </div>
      <ChartExport data={chartData} /> {/* Используйте компонент экспорта */}
    </div>
  );
}

export default ChartDisplay;
