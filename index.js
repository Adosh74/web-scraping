const request = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.imdb.com/title/tt4154796/';

(async () => {
    
    const response = await request(url)

    let $ = cheerio.load(response);

    let title = $('div[class="sc-69e49b85-0 jqlHBQ"] > h1').text()
    let rating = $('span[class="sc-bde20123-1 cMEQkK"]').text()

    console.log(title);
    console.log(rating);
})()