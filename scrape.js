const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    const email = "wiesenpieps@gmail.com";
    const pass = "sunshine81";

    const navigationPromise = page.waitForNavigation()
    await page.goto('https://translator.stepes.com/stepes-check-jobs.html');

    await page.click('body > section:nth-child(2) > div > div.col-md-6 > div > form > div > div > a');

    await navigationPromise;
    await page.waitForSelector('#form_translator > div.signbox > div.sig-part-2 > div:nth-child(2) > input[type="text"]',{ visible: true });
    await page.evaluate((email, pass) => {
      document.querySelector('#form_translator > div.signbox > div.sig-part-2 > div:nth-child(2) > input[type="text"]').value = email;
      document.querySelector('#form_translator > div.signbox > div.sig-part-2 > div:nth-child(3) > input[type="password"]').value = pass;
    }, email, pass);

    // await page.waitForSelector('#login_submit',{ visible: true });
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await page.click('#login_submit');
    await navigationPromise;
    await page.waitForSelector('body > div > aside > div > nav > ul > li.currentclass > a > span');
    await page.click('body > div > aside > div > nav > ul > li.currentclass > a > span');
    await navigationPromise;

    // await page.goto('https://translator.stepes.com/stepes-check-jobs.html?show_type=&s_langs=&s_service=&s_industry=&job_sorting=&show_order_id=&page=6');
    // await navigationPromise;

    // const result = await page.evaluate(function() {
    //   let data = []; // Create an empty array that will store our data
    //   let elements = document.querySelectorAll('.job-list'); // Select all Products
    //   console.log(elements);
    //
    //   for (var element of elements){ // Loop through each proudct
    //     let title = element.childNodes[5].innerText; // Select the title
    //     data.push({title}); // Push an object with the data onto our array
    //   }
    //
    //     return data; // Return our data array
    // });
    //
    // browser.close();
    // return result; // Return the data
};

let accept_it = async () => {
  await page.reload();
  await page.waitForSelector('body > div > section > div > div.head-title-new');
  const linkHandlers = await page.$x("//a[contains(text(), 'Accept')]");

  if (linkHandlers.length > 0) {
    await linkHandlers[1].click();
  } else {
    throw new Error("Link not found");
  }

  try {
      await page.click('#message_bottom > button.first\n');
      return('GOT ONE!!!!');
  } catch (error) {
    return('.');
  }

  // await page.waitForSelector('#special-font-hl > form > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div > div.workbench-input > div:nth-child(3) > div > div > a');
  // await page.click('#special-font-hl > form > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div > div.workbench-input > div:nth-child(3) > div > div > a');

};


scrape().then(function (value) {
  console.log('page loaded'); // Success!
});

let i = 0;
setInterval(function() {
  accept_it().then(function(value) {
    console.log(value);
  });
}, 10000);