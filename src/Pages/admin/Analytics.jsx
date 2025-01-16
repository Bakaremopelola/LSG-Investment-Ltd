import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const Analytics = () => {
  const [data, setData] = useState([]);

  // Example function to fetch or update data (simulate real-time data)
  const fetchData = () => {
    // Simulating data fetching
    const newData = [
      { name: 'Page A', uv: Math.random() * 400, pv: Math.random() * 2400, amt: Math.random() * 2400 },
      { name: 'Page B', uv: Math.random() * 300, pv: Math.random() * 1398, amt: Math.random() * 2210 },
      { name: 'Page C', uv: Math.random() * 200, pv: Math.random() * 9800, amt: Math.random() * 2290 },
      { name: 'Page D', uv: Math.random() * 278, pv: Math.random() * 3908, amt: Math.random() * 2000 },
      { name: 'Page E', uv: Math.random() * 189, pv: Math.random() * 4800, amt: Math.random() * 2181 },
      { name: 'Page F', uv: Math.random() * 239, pv: Math.random() * 3800, amt: Math.random() * 2500 },
    ];
    setData(newData);
  };

  useEffect(() => {
    // Simulate initial data load
    fetchData();

    // Simulate real-time data update every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="analytics">
      <h1>Analytics</h1>

      <div className="analytics-chart">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="analytics-content">
        <div className="analytics-section">
          <h2>Section 1</h2>
          <p>
            This is the content of section 1. You can add any relevant information here.
          </p>
        </div>

        <div className="analytics-section">
          <h2>Section 2</h2>
          <p>
            This is the content of section 2. You can add tables, lists, or other components here.
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Item 1</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Item 2</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="analytics-section">
          <h2>Section 3</h2>
          <p>
            This is the content of section 3. You can display statistics, metrics, or additional charts.
          </p>
          <div className="statistics">
            <div className="statistic">
              <h3>Total Users</h3>
              <div className="statistic-value">1000</div>
            </div>
            <div className="statistic">
              <h3>Revenue</h3>
              <div className="statistic-value">$50,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
