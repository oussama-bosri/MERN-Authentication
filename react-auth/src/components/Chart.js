import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';

function App() {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/statistics?page=1&pageSize=10');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      createChart();
    }
  }, [data]);

  const createChart = () => {
    const labels = data.docs.map((doc) => doc.date);
    const values = data.docs.map((doc) => doc.timestamp);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Timestamp',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Data:</h1>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
}

export default App;
