const request = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.imdb.com/title/tt4154796/';

(async () => {
    
    const response = await request({
        uri: url,
        headers: {
            'authority': 'm.imdb.com',
            'method': 'GET',
            'path': '/title/tt4154796/',
            'scheme': 'https',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Brave";v="122"',
            'Sec-Ch-Ua-Mobile': '?1',
            'Sec-Ch-Ua-Platform': '"Android"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Sec-Gpc': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36'
        },
        gzip: true
    })

    let $ = cheerio.load(response);

    let title = $('div[class="sc-69e49b85-0 jqlHBQ"] > h1').text()
    let rating = $('span[class="sc-bde20123-1 cMEQkK"]').text()

    console.log(title);
    console.log(parseFloat(rating));
})()
