require('dotenv').config();

const webDriver = require('selenium-webdriver');

async function openCrawlerWeb(){
    let driver = await new webDriver.Builder().forBrowser("chrome").build();

    const openWeb = process.env.TargetWebURL;
    driver.get(openWeb);

}

openCrawlerWeb();