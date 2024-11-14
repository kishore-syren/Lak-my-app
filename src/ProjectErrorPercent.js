import React from 'react';
import './App.css';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

function ProjectErrorPercent() {
  // Dummy data for PieChart
  const data = {
    data: [
      { id: 'TransandMedTech', value: 35 }, // 35% errors in Project A
      { id: 'AtomB1', value: 25 }, // 25% errors in Project B
      { id: 'AtomB2', value: 15 }, // 15% errors in Project C
      { id: 'Optmius', value: 25 }, // 25% errors in Project D
    ],
  };

  // Size of the chart
  const size = {
    width: 400,
    height: 400,
  };

  return (
    <div className="App">
      <h6>AtomB1</h6>
      <h6>AtomB2</h6>
      <h6>TransandMed</h6>

      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.id}\n${item.value}%`, // Project name and percentage on two lines
            arcLabelMinAngle: 35, // Minimum angle to display arc label
            arcLabelRadius: '60%', // Position the label closer to the center
            ...data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold', // Style for arc labels
            fontSize: '12px',
            whiteSpace: 'pre-line', // Ensures line breaks are respected
            textAlign: 'center',   // Centers the text within the arc
          },
        }}
        {...size} // Apply chart size
      />
    </div>
  );
}

export default ProjectErrorPercent;
