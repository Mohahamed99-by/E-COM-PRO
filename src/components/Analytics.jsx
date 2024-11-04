// src/pages/Analytics.js
import React from 'react';
import { BarChart as BarChartIcon, TrendingUp, Users, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';

const Analytics = () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', sales: 4000, profit: 2400 },
    { name: 'Feb', sales: 3000, profit: 1398 },
    { name: 'Mar', sales: 2000, profit: 9800 },
    { name: 'Apr', sales: 2780, profit: 3908 },
    { name: 'May', sales: 1890, profit: 4800 },
    { name: 'Jun', sales: 2390, profit: 3800 },
  ];

  const dailyVisitors = [
    { day: 'Mon', visitors: 1200 },
    { day: 'Tue', visitors: 1400 },
    { day: 'Wed', visitors: 1600 },
    { day: 'Thu', visitors: 1400 },
    { day: 'Fri', visitors: 1500 },
    { day: 'Sat', visitors: 1000 },
    { day: 'Sun', visitors: 800 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Analytics Dashboard</h1>
      
      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '20px',
        marginBottom: '30px' 
      }}>
        <StatCard 
          title="Total Revenue" 
          value="$54,239" 
          change="+12.5%" 
          isPositive={true}
          icon={<DollarSign />} 
        />
        <StatCard 
          title="Total Users" 
          value="2,543" 
          change="+8.2%" 
          isPositive={true}
          icon={<Users />} 
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.42%" 
          change="-1.8%" 
          isPositive={false}
          icon={<TrendingUp />} 
        />
        <StatCard 
          title="Total Sales" 
          value="1,234" 
          change="+2.4%" 
          isPositive={true}
          icon={<BarChartIcon />} 
        />
      </div>

      {/* Charts */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <ChartCard title="Revenue & Profit">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Sales" />
              <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Daily Visitors">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyVisitors}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" name="Visitors" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, isPositive, icon }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ 
        backgroundColor: '#f0f0f0',
        padding: '8px',
        borderRadius: '8px',
      }}>
        {icon}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        color: isPositive ? 'green' : 'red',
        fontSize: '14px',
      }}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {change}
      </div>
    </div>
    <div style={{ marginBottom: '5px', color: '#666' }}>{title}</div>
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
  </div>
);

// Chart Card Component
const ChartCard = ({ title, children }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }}>
    <h2 style={{ marginBottom: '20px' }}>{title}</h2>
    {children}
  </div>
);

export default Analytics;