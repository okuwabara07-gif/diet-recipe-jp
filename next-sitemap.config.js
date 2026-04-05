/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://diet-recipe-jp.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://diet-recipe-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
