import { FirecrawlApp } from 'firecrawl';

const firecrawl = new FirecrawlApp({
  apiKey: import.meta.env.VITE_FIRECRAWL_API_KEY
});

export async function scrapeWebsite(url: string) {
  try {
    const response = await firecrawl.scrapeUrl(url, {
      pageOptions: { includeHtml: false },
      timeout: 60
    });
    return response.data;
  } catch (error) {
    console.error('Scraping failed:', error);
    throw new Error('Failed to scrape website');
  }
}
