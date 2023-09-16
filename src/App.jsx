import React, { useState } from 'react';
import ChartDisplay from './components/ChartDisplay/ChartDisplay';
import ChartInput from './components/ChartInput/ChartInput';
// import ChartInput from './ChartInput';
// import ChartDisplay from './ChartDisplay';

function App() {
  // const [chartData, setChartData] = useState([]);

  // const updateChart = (data) => {
  //   setChartData(data);
  // };

  const [chartData, setChartData] = useState([
    {
      label: 'Red',
      data: 3
    },
    {
      label: 'Blue',
      data: 1
    },
    {
      label: 'Yellow',
      data: 8
    },
    {
      label: 'Red',
      data: 3
    },

  ])

  return (
    <div className="wrapper">
      <section className="graph">
        <div className="graph__container container">
          <h1 className="title">Графика</h1>
          <div className="content">
            <ChartInput data={chartData} setData={setChartData}/>
            <ChartDisplay data={chartData}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
