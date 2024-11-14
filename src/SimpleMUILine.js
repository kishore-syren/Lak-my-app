import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart } from '@mui/x-charts/LineChart';

function SimpleMUILine() {
  const [timeRange, setTimeRange] = useState('1 week');
  const [dataset, setDataset] = useState([]);

  // Function to generate random error messages
  const getRandomErrorMessage = () => {
    const errorMessages = [
      'Error: Database connection failed',
      'Error: Timeout occurred',
      'Error: Invalid input detected',
      'Error: Access denied',
      'Error: Service unavailable',
    ];
    return errorMessages[Math.floor(Math.random() * errorMessages.length)];
  };

  const generateData = (days) => {
    const data = [];
    let base = new Date();

    for (let i = 0; i < days; i++) {
      base.setDate(base.getDate() - 1);
      data.push({
        date: new Date(base),
        totalRuns: Math.floor(Math.random() * 40),
        totalErrors: Math.floor(Math.random() * 40),
        CreatedCount: Math.floor(Math.random() * 40),
      });
    }
    return data.reverse();
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
        {/* Dropdown for selecting time range */}
        <label>Select Time Range: </label>
        <select value={timeRange} onChange={handleTimeRangeChange}>
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="2 months">2 months</option>
          <option value="6 months">6 months</option>
        </select>
      </div>

      {/* Chart */}
      <div id="main" style={{ width: '100%', height: '400px' }}>
        <LineChart
          dataset={dataset}
          xAxis={[
            {
              id: 'Dates',
              dataKey: 'date',
              scaleType: 'time',
              valueFormatter: (date) =>
                date.toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                }), // mm/dd/yyyy format
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 60,
              tickInterval: 5,
            },
          ]}
          series={[
            {
              id: 'totalRuns',
              label: 'Total RuleRuns',
              dataKey: 'totalRuns',
              showMark: false,
            },
            {
              id: 'totalErrors',
              label: 'Total Errors',
              dataKey: 'totalErrors',
              showMark: false,
              color: 'error'
            },
            {
              id: 'CreatedCount',
              label: 'Created count',
              dataKey: 'CreatedCount',
              showMark: false,
            }
          ]}
          tooltip={{
            title: (point) => `${point.item.date.toLocaleDateString('en-US')}`, // Display the date in tooltip title
          }}
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}

export default SimpleMUILine;
