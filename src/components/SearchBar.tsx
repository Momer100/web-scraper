import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';

interface SearchBarProps {
  onScrape: (url: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onScrape }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onScrape(url);
      setUrl('');
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL to scrape..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Globe className="h-5 w-5 text-blue-500" />
          Scrape
        </button>
      </form>
    </div>
  );
};

export default SearchBar;