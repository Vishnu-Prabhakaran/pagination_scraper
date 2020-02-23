const request = require('request-promise');
const cheerio = require('cheerio');

// Pagination scraper
async function scrape() {
  for (let index = 0; index <= 360; index = index + 120) {
    const html = await request.get(
      'https://losangeles.craigslist.org/search/jjj?s=' + index
    );
    const $ = await cheerio.load(html);
    $('.result-title').each((index, element) => {
      console.log($(element).text());
    });

    console.log(" Page number", index);
  }
}

scrape();
