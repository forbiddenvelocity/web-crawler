const puppeteer = require('puppeteer');

async function crawledProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [nameEl] = await page.$x('//*[@id="main-title"]')
    const name = (await nameEl.getProperty('textContent')).jsonValue();
    
    const [designationEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[1]');
    const designation = (await designationEl.getProperty("textContent")).jsonValue();

    const [emailEl] = await page.$x('//*[@id="profile"]/div/div[2]/p/text()[1]');
    const email = (await emailEl.getProperty("textContent")).jsonValue();


    console.log({name, designation, email});

    await browser.close();
}

const facultyUrls = [
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16345',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16333',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16347',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16341',
]

for(const url of facultyUrls) {
    crawledProduct(url)
}
