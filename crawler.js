const puppeteer = require('puppeteer');

async function crawledProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[3]/div/div[2]/div/div[1]/div[1]/div/div/div[2]/p[1]')
    const txt = await el.getProperty('textContent')
    const rawTxt = await txt.jsonValue();

    const [el1] = await page.$x('/html/body/div[3]/div/div[2]/div/div[1]/div[1]/div/div/div[2]/p[2]');
    const priceText = (await el1.getProperty("textContent")).jsonValue();

    const [el2] = await page.$x('/html/body/div[3]/div/div[2]/div/div[1]/div[1]/div/div/div[2]/p[4]/a');
    const mailId = (await el2.getProperty("textContent")).jsonValue();


    console.log({rawTxt, priceText, mailId});
}

crawledProduct('https://wsdc.nitw.ac.in/facultynew/dept/faculty_profiles/cse')