// src/pages/Settings.js
import React, { useState } from 'react';
import { User, Bell, Shield, Key, Mail, Globe, Moon, Sun } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    language: 'en',
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    twoFactorAuth: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 border-b">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-4 py-2 space-x-2 ${
              activeTab === id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          {/* Account Settings */}
          <div className={activeTab === 'account' ? 'block' : 'hidden'}>
            <div className="p-6 space-y-6">
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Account Settings</h2>
                
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={40} className="text-gray-400" />
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Change Photo
                  </button>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className={activeTab === 'notifications' ? 'block' : 'hidden'}>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail size={20} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={formData.emailNotifications}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell size={20} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Push Notifications</p>
                      <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="pushNotifications"
                      checked={formData.pushNotifications}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe size={20} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Marketing Emails</p>
                      <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingEmails"
                      checked={formData.marketingEmails}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className={activeTab === 'security' ? 'block' : 'hidden'}>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Key size={20} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="twoFactorAuth"
                      checked={formData.twoFactorAuth}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div>
                  <button
                    type="button"
                    className="mt-4 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end rounded-b-lg">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;