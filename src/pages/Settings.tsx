import React, { useState } from 'react';
import { CreditCard, Mail, Cookie, Save } from 'lucide-react';

type SettingsTab = 'billing' | 'account' | 'cookies';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('billing');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Tabs */}
        <div className="flex space-x-2 mb-8 border-b pb-2">
          <button
            onClick={() => setActiveTab('billing')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'billing' 
                ? 'bg-gray-100 text-gray-900 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CreditCard className="h-5 w-5 mr-2" />
            Billing
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'account' 
                ? 'bg-gray-100 text-gray-900 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Mail className="h-5 w-5 mr-2" />
            Account
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`flex items-center px-4 py-2 rounded-md ${
              activeTab === 'cookies' 
                ? 'bg-gray-100 text-gray-900 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Cookie className="h-5 w-5 mr-2" />
            Cookies
          </button>
        </div>
        
        {/* Billing Tab Content */}
        {activeTab === 'billing' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Subscription Plan</h2>
              <p className="text-gray-600">Manage your subscription and billing information.</p>
            </div>
            
            <div className="border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-gray-900">Pro Plan</h3>
              <p className="text-gray-600 text-lg mt-1">$29/month</p>
            </div>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Manage Subscription
            </button>
          </div>
        )}
        
        {/* Account Tab Content */}
        {activeTab === 'account' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Account Information</h2>
              <p className="text-gray-600">Update your account details and preferences.</p>
            </div>
            
            <div className="space-y-4 max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  defaultValue="Acme Inc."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        )}
        
        {/* Cookies Tab Content */}
        {activeTab === 'cookies' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Cookie Preferences</h2>
              <p className="text-gray-600">Manage how we use cookies on this site.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="essential"
                    name="essential"
                    type="checkbox"
                    checked
                    disabled
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="essential" className="font-medium text-gray-700">Essential Cookies</label>
                  <p className="text-gray-500">Required for the website to function properly. Cannot be disabled.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="analytics"
                    name="analytics"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="analytics" className="font-medium text-gray-700">Analytics Cookies</label>
                  <p className="text-gray-500">Help us improve our website by collecting anonymous usage information.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="marketing"
                    name="marketing"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="marketing" className="font-medium text-gray-700">Marketing Cookies</label>
                  <p className="text-gray-500">Allow us to provide personalized content and advertisements.</p>
                </div>
              </div>
              
              <button
                type="button"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;