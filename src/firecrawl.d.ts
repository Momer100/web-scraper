declare module 'firecrawl' {
  interface ScrapeOptions {
    pageOptions?: {
      includeHtml?: boolean;
    };
    timeout?: number;
  }

  interface ScrapeResponse {
    data: {
      content: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
  }

  class FirecrawlApp {
    constructor(config: { apiKey: string });
    scrapeUrl(url: string, options?: ScrapeOptions): Promise<ScrapeResponse>;
  }
}
