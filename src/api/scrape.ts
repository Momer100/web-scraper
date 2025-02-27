import { scrapeWebsite } from '../lib/firecrawl';

import { Request, Response } from 'express';

export async function handleScrapeRequest(req: Request, res: Response) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const data = await scrapeWebsite(url);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to scrape website' });
  }
}
