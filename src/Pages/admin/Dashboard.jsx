import  { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './dashboard.css';
const Dashboard = () => {
  // Sample data for the chart (replace with your actual data)
  const [chartData] = useState([
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ]);

  // Example function to fetch or update data (simulate real-time data)
  const fetchData = () => {
    // Replace with your data fetching logic
    // Example: fetch('/api/data')
    //   .then(response => response.json())
    //   .then(data => setChartData(data));
  };

  useEffect(() => {
    // Simulate real-time data update every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Add other dashboard content here */}
      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Section 1</h2>
          <p>This is the content of section 1. You can add any relevant information here.</p>
        </div>

        <div className="dashboard-section">
          <h2>Section 2</h2>
          <p>This is the content of section 2. You can add tables, lists, or other components here.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Section 3</h2>
          <p>This is the content of section 3. You can display statistics, metrics, or additional charts.</p>
          <div style={{ width: '100%', height: 300 }}>
            {/* Add another chart or visualization here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
