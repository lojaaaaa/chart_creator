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

  return (
    <div className="wrapper">
      <section className="graph">
        <div className="graph__container container">
          <h1 className="title">Графика</h1>
          <div className="content">
            <ChartInput />
            <ChartDisplay />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
