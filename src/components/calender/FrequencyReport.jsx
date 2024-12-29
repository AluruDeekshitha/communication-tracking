import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FrequencyReport = ({ communications }) => {
  // Calculate frequency
  const frequency = communications.reduce((acc, comm) => {
    acc[comm.type] = (acc[comm.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(frequency).map((key) => ({
    type: key,
    count: frequency[key],
  }));

  return (
    <div className="frequency-report">
      <h2>Communication Frequency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FrequencyReport;
