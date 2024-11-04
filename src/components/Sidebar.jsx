// src/components/Sidebar.js
import React, { useState } from 'react';
import { Home, BarChart, ShoppingCart, Users, Settings, X, Menu } from 'lucide-react';
import NavItem from './NavItem';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  

  return (
    <div
      style={{
        width: isOpen ? '240px' : '80px',
        height: '100vh',
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px',
        justifyContent: isOpen ? 'space-between' : 'center'
      }}>
        {isOpen && <h2>Dashboard</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '10px',
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <NavItem icon={Home} label="Home" to="/" isOpen={isOpen} size={24} />
        <NavItem icon={BarChart} label="Analytics" to="/analytics" isOpen={isOpen} size={24} />
        <NavItem icon={ShoppingCart} label="Orders" to="/orders" isOpen={isOpen} size={24} />
        <NavItem icon={Users} label="Customers" to="/customers" isOpen={isOpen} size={24} />
        <NavItem icon={Settings} label="Settings" to="/settings" isOpen={isOpen} size={24} />
      </nav>
    </div>
  );
};



export default Sidebar;