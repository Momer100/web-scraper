import React from 'react';
import { LayoutDashboard, Settings, File as FileExport, HelpCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: FileExport, label: 'Export', path: '/export' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <Globe className="h-6 w-6 text-blue-500" />
        <h1 className="text-xl font-bold">Momer Web Scraper</h1>
      </div>
      
      <div className="mt-6">
        <p className="px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          MENU
        </p>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm ${
                isActive(item.path)
                  ? 'bg-gray-800 text-white border-l-4 border-blue-500'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-6 text-xs text-gray-500">
        <p>Momer Web Scraper v1.0.0</p>
        <p>© 2025 Momer</p>
      </div>
    </div>
  );
};

export default Sidebar;