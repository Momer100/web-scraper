export type ScrapeStatus = 'pending' | 'completed' | 'failed';

export interface ScrapedWebsite {
  id: string;
  url: string;
  date: string;
  status: ScrapeStatus;
  data?: string;
  analysis?: string;
}