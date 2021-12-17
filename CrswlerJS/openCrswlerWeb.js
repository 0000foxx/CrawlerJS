require('dotenv').config();

const webDriver = require('selenium-webdriver');

async function openCrawlerWeb(){
    let driver = await new webDriver.Builder().forBrowser("chrome").build();

    const openWeb = 'https://writingfoxx.com';
    driver.get(openWeb);
}

openCrawlerWeb();