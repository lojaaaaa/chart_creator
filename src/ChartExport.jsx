import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { Chart as ChartJS } from 'chart.js/auto';

function ChartExport({ data }) {
  const chartRef = useRef(null);

  const handleExport = () => {
    if (chartRef.current) {
      setTimeout(() => {
        html2canvas(chartRef.current).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'chart.png'; // Имя файла для сохранения
          link.click();
        });
      }, 0);
    }
  };
  


  return (
    <div>
      <h2>Экспорт графика</h2>
      <div>
        <Bar ref={chartRef} data={data} />
      </div>
      <button onClick={handleExport}>Сохранить график</button>
    </div>
  );
}

export default ChartExport;
