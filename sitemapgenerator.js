const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('https://www.nayan.co/#/', {
  stripQuerystring: false,
  ignoreHreflang: true
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});
 
// start the crawler
generator.start();