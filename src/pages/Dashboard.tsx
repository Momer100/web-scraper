import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WebsiteTable from '../components/WebsiteTable';
import { ScrapedWebsite } from '../types';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { scrapeWebsite } from '../lib/firecrawl';

const Dashboard: React.FC = () => {
  const [websites, setWebsites] = useState<ScrapedWebsite[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserScrapes();
    }
  }, [user]);

  const fetchUserScrapes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_scrapes')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching scrapes:', error);
        return;
      }

      if (data) {
        const formattedData: ScrapedWebsite[] = data.map(item => ({
          id: item.id,
          url: item.url,
          date: new Date(item.created_at).toLocaleDateString('en-GB'),
          status: item.status as 'pending' | 'completed' | 'failed',
          data: item.data ? JSON.stringify(item.data) : undefined,
          analysis: item.analysis ? JSON.stringify(item.analysis) : undefined
        }));
        
        setWebsites(formattedData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScrape = async (url: string) => {
    if (!user) return;
    
    // Format URL for display (remove http/https if present)
    const displayUrl = url.replace(/^https?:\/\//, '');
    
    // Create a new website entry
    const newScrape = {
      url: displayUrl,
      status: 'pending',
      user_id: user.id,
    };
    
    try {
      // Insert into Supabase
      const { data, error } = await supabase
        .from('user_scrapes')
        .insert(newScrape)
        .select()
        .single();
        
      if (error) {
        console.error('Error creating scrape:', error);
        return;
      }
      
      if (data) {
        // Add to the local state
        const newWebsite: ScrapedWebsite = {
          id: data.id,
          url: data.url,
          date: new Date(data.created_at).toLocaleDateString('en-GB'),
          status: 'pending',
        };
        
        setWebsites([newWebsite, ...websites]);
        
      // Actual API call to scrape website
      try {
        const result = await scrapeWebsite(url);
        
        // Update scrape record with results
        const payload = {
          content: result.content,
          metadata: result.metadata || {}
        };
        // Ensure payload conforms to Json by serializing and parsing
        const safePayload = JSON.parse(JSON.stringify(payload));
        const { error: updateError } = await supabase
          .from('user_scrapes')
          .update({ 
            status: 'completed',
            data: safePayload
          })
          .eq('id', data.id);

        if (updateError) throw updateError;
        
        // Update local state
        setWebsites(prevWebsites => 
          prevWebsites.map(website => 
            website.id === data.id ? { 
              ...website, 
              status: 'completed',
              data: JSON.stringify(result)
            } : website
          )
        );
      } catch (error) {
        console.error('Scraping failed:', error);
        
        // Update status to failed
        await supabase
          .from('user_scrapes')
          .update({ status: 'failed' })
          .eq('id', data.id);

        setWebsites(prevWebsites => 
          prevWebsites.map(website => 
            website.id === data.id ? { 
              ...website, 
              status: 'failed'
            } : website
          )
        );
      }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Scrape and analyze websites</p>
      </div>
      
      <SearchBar onScrape={handleScrape} />
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <WebsiteTable websites={websites} />
      )}
    </div>
  );
};

export default Dashboard;
