import React, { useState } from 'react';

function ChartInput({ updateChart }) {
  const [data, setData] = useState('');
  
  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleUpdateChart = () => {
    const dataArray = data.split(',').map(Number);
    updateChart(dataArray);
  };

  return (
    <div>
      <h2>График</h2>
      <input
        type="text"
        placeholder="Введите данные (через запятую)"
        value={data}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateChart}>Обновить график</button>
    </div>
  );
}

export default ChartInput;
