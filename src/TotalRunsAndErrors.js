import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, ZoomAndPan,
} from 'recharts';

function TotalRunsAndErrors() {
  const [timeRange, setTimeRange] = useState('1 week');
  const [dataset, setDataset] = useState([]);

  const generateData = (days) => {
    const data = [];
    let base = new Date();

    for (let i = 0; i < days; i++) {
      base.setDate(base.getDate() - 1);
      data.push({
        date: base.toISOString().split('T')[0], // ISO date string
        totalRuns: Math.floor(Math.random() * 40),
        totalErrors: Math.floor(Math.random() * 40),
        CreatedRules: Math.floor(Math.random() * 40),
        UpdatedRules: Math.floor(Math.random() * 40),
      });
    }
    return data.reverse(); // Reverse the array to get ascending dates
  };

  useEffect(() => {
    let days;
    switch (timeRange) {
      case '1 week':
        days = 7;
        break;
      case '2 weeks':
        days = 14;
        break;
      case '1 month':
        days = 30;
        break;
      case '2 months':
        days = 60;
        break;
      case '6 months':
        days = 180;
        break;
      default:
        days = 7;
    }
    setDataset(generateData(days));
  }, [timeRange]);

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <label>Select Time Range: </label>
        <select value={timeRange} onChange={handleTimeRangeChange}>
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="2 months">2 months</option>
          <option value="6 months">6 months</option>
        </select>
      </div>

      <ResponsiveContainer width="50%" height={400}>
        <LineChart
          data={dataset}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalRuns" stroke="#8884d8" />
          <Line type="monotone" dataKey="totalErrors" stroke="#82ca9d" />
          <Line type="monotone" dataKey="CreatedRules" stroke="#ff7300" />
          <Line type="monotone" dataKey="UpdatedRules" stroke="#387908" />
          
          {/* Brush for manual zooming */}
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TotalRunsAndErrors;
