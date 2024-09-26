export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/', // Allow all bots to crawl the entire site
        },
      ],
      sitemap: 'https://parther.in/sitemap.xml', // Replace with your actual sitemap URL
    }
  }
  