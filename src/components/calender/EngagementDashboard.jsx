import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const EngagementDashboard = ({ effectiveness }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Example data for the line chart (You can replace this with actual data)
  const lineData = [
    { date: '2024-12-01', value: 30 },
    { date: '2024-12-05', value: 45 },
    { date: '2024-12-10', value: 50 },
    { date: '2024-12-15', value: 55 },
    { date: '2024-12-20', value: 60 },
    { date: '2024-12-25', value: 65 },
  ];

  return (
    <div className="engagement-dashboard">
      <h2>Engagement Effectiveness</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={effectiveness}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {effectiveness.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Labels for colors */}
      <div className="flex justify-center mt-4">
        {effectiveness.map((entry, index) => (
          <div
            key={index}
            className="flex items-center mx-2"
            style={{ color: COLORS[index % COLORS.length] }}
          >
            <div
              style={{
                backgroundColor: COLORS[index % COLORS.length],
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            ></div>
            <span>{entry.type}</span>
          </div>
        ))}
      </div>

      {/* Line Graph */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Engagement Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementDashboard;
