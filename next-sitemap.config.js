/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://musefeta.vercel.app", // Change this to your actual domain if needed
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 5000, // Ensures all URLs are in one file
  generateIndexSitemap: false, // Prevents splitting into sitemap-0.xml
};
