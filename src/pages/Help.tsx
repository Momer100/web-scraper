import React from 'react';
import { HelpCircle, Book, MessageCircle, Globe } from 'lucide-react';

const Help: React.FC = () => {
  const helpSections = [
    {
      title: 'Getting Started',
      icon: Book,
      content: (
        <>
          <p className="mb-4">
            Momer Web Scraper is a powerful web scraping tool that allows you to extract data from websites quickly and efficiently.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Enter a website URL in the search bar on the Dashboard</li>
            <li>Click the "Scrape" button to start the scraping process</li>
            <li>Wait for the scraping to complete</li>
            <li>View the scraped data by clicking the "View" button</li>
          </ol>
        </>
      )
    },
    {
      title: 'Frequently Asked Questions',
      icon: HelpCircle,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">How long does scraping take?</h4>
            <p className="text-gray-600">Scraping time depends on the website size and complexity. Most websites take between 10-60 seconds.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Can I scrape any website?</h4>
            <p className="text-gray-600">While Momer Web Scraper can scrape most websites, some may have protections against scraping. Always ensure you have permission to scrape a website.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">How is the data stored?</h4>
            <p className="text-gray-600">All scraped data is stored securely in your account and can be exported in various formats.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Contact Support',
      icon: MessageCircle,
      content: (
        <div>
          <p className="mb-4">
            Need help with Momer Web Scraper? Our support team is ready to assist you.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">Email Support:</p>
            <p className="text-blue-600">support@momer.com</p>
            
            <p className="font-medium mt-3">Live Chat:</p>
            <p>Available Monday-Friday, 9am-5pm EST</p>
            
            <button
              type="button"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'API Documentation',
      icon: Globe,
      content: (
        <div>
          <p className="mb-4">
            Momer Web Scraper provides a comprehensive API for integrating web scraping capabilities into your applications.
          </p>
          <p className="mb-4">
            Our API documentation includes detailed information on endpoints, parameters, and response formats.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <Book className="h-4 w-4 mr-1" />
            View API Documentation
          </a>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600">Learn how to use Momer Web Scraper effectively</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpSections.map((section, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-100 text-gray-900">
                <section.icon className="h-6 w-6" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">{section.title}</h3>
            </div>
            <div className="text-sm text-gray-600">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;