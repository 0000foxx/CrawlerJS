require('dotenv').config();
const webDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const fs = require("fs");

function CheckChromeDriver(){
    try{
       chrome.getDefaultService();
    }catch{
       console.log('找不到預設Chrome');
       let chromeFilePath = './chromedriver.exe';
       console.log(path.join(__dirname, chromeFilePath));
       if(fs.existsSync(path.join(__dirname, chromeFilePath))){
           let service = new chrome.ServiceBuilder(path.join(__dirname, chromeFilePath)).build();
           chrome.setDefaultService(service);
           console.log('設定chrome drive路徑');
       }else{
           console.log('無法設定driver路徑');
           return false;
       }
    }
    return true;
}

async function openCrawlerWeb(){
    if(!CheckChromeDriver()){
       return;
    }

    let driver;
    try{
       driver = await new webDriver.Builder().forBrowser("chrome").build();
    }catch(e){
       console.log('無法建立chrome');
       console.log(e);
       return;
    }

    console.log('4');
    const openWeb = process.env.TargetWebURL;
    console.log('5');
    driver.get(openWeb);
    console.log('6');
}

console.log('1');
openCrawlerWeb().then();
console.log('3');
