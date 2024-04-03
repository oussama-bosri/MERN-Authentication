import React, { useEffect, useState } from 'react';

function Statistics() {
  const [data, setData] = useState(null);

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

  const handlePrevPage = async () => {
    if (data.hasPrevPage) {
      try {
        const response = await fetch(`http://localhost:3001/statistics?page=${data.prevPage}&pageSize=10`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleNextPage = async () => {
    if (data.hasNextPage) {
      try {
        const response = await fetch(`http://localhost:3001/statistics?page=${data.nextPage}&pageSize=10`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
        <div>
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>OCSP Monitoring Data:</span>
{/*         <button className="btn btn-primary" onClick={generateReport}>
          Generate Report
        </button> */}
      </h1>
    </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Time&Date</th>
          </tr>
        </thead>
        <tbody>
          {data.docs.map((doc) => (
            <tr key={doc._id}>
              <td>{doc._id}</td>
              <td>{doc.status}</td>
              <td>{doc.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary me-2" onClick={handlePrevPage} disabled={!data.hasPrevPage}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNextPage} disabled={!data.hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Statistics;
