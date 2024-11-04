import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
// Custom Card Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const EcommerceDashboard = () => {
  
  // Sample data - in a real app, this would come from an API
  const salesData = [
    { month: 'Jan', sales: 1000 },
    { month: 'Feb', sales: 9000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];



  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between space-x-4">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && (
              <p className="text-sm text-green-600 mt-1">
                +{trend}% from last month
              </p>
            )}
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
    <div className='flex '>
    
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Revenue" 
            value="$48,574" 
            icon={DollarSign}
            trend="12"
          />
          <StatCard 
            title="Total Customers" 
            value="2,420" 
            icon={Users}
            trend="8"
          />
          <StatCard 
            title="Total Orders" 
            value="1,210" 
            icon={ShoppingCart}
            trend="15"
          />
          <StatCard 
            title="Conversion Rate" 
            value="3.2%" 
            icon={TrendingUp}
            trend="4"
          />
        </div>

        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        
      </div>
    </div>
    </div>
    </>
  );
};

export default EcommerceDashboard;