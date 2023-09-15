/*const puppeteer = require('puppeteer');

async function crawledProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [nameEl] = await page.$x('//*[@id="main-title"]')
    const name = (await nameEl.getProperty('textContent')).jsonValue();
    
    const [designationEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[1]');
    const designation = (await designationEl.getProperty("textContent")).jsonValue();

    const [deptEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[2]');
    const department = (await deptEl.getProperty("textContent")).jsonValue();

    const [emailEl] = await page.$x('//*[@id="profile"]/div/div[2]/p');
    const email = (await emailEl.getProperty("textContent")).jsonValue();


    console.log({name, department, designation, email});

    await browser.close();
}

const facultyUrls = [
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16345',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16333',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16347',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16341',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16934',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16339',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16340',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16336',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16342',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16343',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/16337',
    'https://wsdc.nitw.ac.in/facultynew/facultyprofile/id/17097',

]

for(const url of facultyUrls) {
    crawledProduct(url)
}*/
/*
const puppeteer = require('puppeteer');

async function getFacultyUrls(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Use page.evaluate to extract faculty URLs based on their href attribute
    const facultyUrls = await page.evaluate(() => {
        const facultyLinks = document.querySelectorAll('a'); // Select all <a> elements on the page
        const urls = [];
        for (const link of facultyLinks) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/facultynew/facultyprofile/id/')) {
                // Filter links with href attribute starting with "/faculty/"
                urls.push(href);
            }
        }
        return urls;
    });

    await browser.close();
    return facultyUrls;
}

async function main() {
    const facultyListPageUrl = 'https://wsdc.nitw.ac.in/facultynew/dept/faculty_profiles/cse';

    const facultyUrls = await getFacultyUrls(facultyListPageUrl);
    
    if (facultyUrls.length > 0) {
        console.log('Faculty URLs:');
        facultyUrls.forEach((url, index) => {
            console.log(`${index + 1}: ${url}`);
        });
    } else {
        console.log("No faculty URLs found on the page.");
    }
}

main();
*/
/*
const puppeteer = require('puppeteer');

async function getFacultyUrls(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Use page.evaluate to extract faculty URLs based on their href attribute
    const facultyUrls = await page.evaluate(() => {
        const facultyLinks = document.querySelectorAll('a'); // Select all <a> elements on the page
        const urls = [];
        for (const link of facultyLinks) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/facultynew/facultyprofile/id/')) {
                // Filter links with href attribute starting with "/faculty/"
                urls.push(href);
            }
        }
        return urls;
    });

    await browser.close();
    return facultyUrls;
}

async function crawledProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [nameEl] = await page.$x('//*[@id="main-title"]')
    const name = (await nameEl.getProperty('textContent')).jsonValue();
    
    const [designationEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[1]');
    const designation = (await designationEl.getProperty("textContent")).jsonValue();

    const [deptEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[2]');
    const department = (await deptEl.getProperty("textContent")).jsonValue();

    const [emailEl] = await page.$x('//*[@id="profile"]/div/div[2]/p');
    const email = (await emailEl.getProperty("textContent")).jsonValue();

    console.log({name, department, designation, email});

    await browser.close();
}

async function main() {
    const facultyListPageUrl = 'https://wsdc.nitw.ac.in/facultynew/dept/faculty_profiles/cse';

    const facultyUrls = await getFacultyUrls(facultyListPageUrl);
    
    if (facultyUrls.length > 0) {
        console.log('Faculty URLs:');
        facultyUrls.forEach((url, index) => {
            console.log(`${index + 1}: ${url}`);
        });

        // Now, iterate through facultyUrls and call crawledProduct for each URL
        for (const url of facultyUrls) {
            await crawledProduct(`https://wsdc.nitw.ac.in${url}`); // Use the full URL
        }
    } else {
        console.log("No faculty URLs found on the page.");
    }
}

main();
*/
const puppeteer = require('puppeteer');

async function getFacultyUrls(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const facultyUrls = await page.evaluate(() => {
        const facultyLinks = document.querySelectorAll('a'); 
        const urls = [];
        for (const link of facultyLinks) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/facultynew/facultyprofile/id/')) {
                urls.push(href);
            }
        }
        return urls;
    });

    await page.close(); 
    return facultyUrls;
}

async function crawledProduct(url, browser) {
    const page = await browser.newPage(); // Reusing the same browser instance
    await page.goto(url);

    const [nameEl] = await page.$x('//*[@id="main-title"]')
    const name = (await nameEl.getProperty('textContent')).jsonValue();
    
    const [designationEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[1]');
    const designation = (await designationEl.getProperty("textContent")).jsonValue();

    const [deptEl] = await page.$x('//*[@id="profile"]/div/div[2]/h3[2]');
    const department = (await deptEl.getProperty("textContent")).jsonValue();

    const [emailEl] = await page.$x('//*[@id="profile"]/div/div[2]/p');
    const email = (await emailEl.getProperty("textContent")).jsonValue();

    console.log({name, department, designation, email});

    await page.close(); // Closing
}

async function main() {
    const facultyListPageUrl = 'https://wsdc.nitw.ac.in/facultynew/dept/faculty_profiles/mme';

    const browser = await puppeteer.launch();
    const facultyUrls = await getFacultyUrls(facultyListPageUrl);
    
    if (facultyUrls.length > 0) {
        console.log('Faculty URLs:');
        facultyUrls.forEach((url, index) => {
            console.log(`${index + 1}: ${url}`);
        });

        // iterating through facultyUrls and call crawledProduct for each URL
        for (const url of facultyUrls) {
            await crawledProduct(`https://wsdc.nitw.ac.in${url}`, browser); // Passing the browser instance
        }

        
        await browser.close();
    } else {
        console.log("No faculty URLs found on the page.");
    }
}

main();

