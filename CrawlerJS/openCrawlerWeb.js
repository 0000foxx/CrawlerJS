require('dotenv').config();

const webDriver = require('selenium-webdriver');

async function openCrawlerWeb(){
    console.log('2');
    let driver = await new webDriver.Builder().forBrowser("chrome").build();
    console.log('4');
    const openWeb = process.env.TargetWebURL;
    console.log('5');
    driver.get(openWeb);
    console.log('6');
}

console.log('1');
openCrawlerWeb().then();
console.log('3');
