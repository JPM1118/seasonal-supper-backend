const puppeteer = require("puppeteer");
const states = require("./test-objects/locationState");
const monthState = require("./test-objects/monthState");

(async () => {
  let arr = [];
  let months = monthState.months;
  let state = states[10];
  let earlyOrLate = "early";
  let month = months[0].title;

  const extractProduce = async currentUrl => {
    const page = await browser.newPage();
    await page.goto(currentUrl);
    console.log(`scraping: ${currentUrl}`);
    const produce = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h3.card-spacer")).map(
        produce => produce.innerHTML
      )
    );
    await page.close();
    return produce;
  };
  const browser = await puppeteer.launch();
  let url = `https://www.seasonalfoodguide.org/${state}/${earlyOrLate}-${month}`;

  arr = await extractProduce(url);

  // earlyOrLate === "early"
  //   ? ((earlyOrLate = "late"), [...arr, await extractProduce(url)])
  //   : (earlyOrLate = "early");
  await browser.close();
  console.log(arr);
})();
