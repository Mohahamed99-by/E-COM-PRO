// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EcommerceDashboard from './components/EcommerceDashboard';
import Orders from './components/Orders';
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import Customers from './components/Customers';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-auto p-5">
          <Routes>
            <Route path="/" element={<EcommerceDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;