const puppeteer = require("puppeteer");
const states = require("./locationState");
const monthState = require("./monthState");

let months = monthState.months;
let state = states[1];
const getProduce = async (month, state) => {
  const extractProduce = async (state, month, string) => {
    let url = `https://www.seasonalfoodguide.org/${state}/${string}-${month}`;

    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(1000);
    const produce = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h3.card-spacer")).map(
        produce => produce.innerHTML
      )
    );
    await page.close();
    return produce;
  };

  // let month = months[0].title;
  let arr = [];
  const browser = await puppeteer.launch();

  arr = [
    ...(await extractProduce(state, month, "early")),
    ...(await extractProduce(state, month, "late"))
  ];
  console.log(`produce for the month of ${month} is : ${arr}`);

  await browser.close();
  // console.log(Array.from(new Set(arr)));
};

async function processArray(array) {
  for (const month of array) {
    await getProduce(month.title, state);
  }
  console.log("done!");
}

processArray(months);

async function traverse(jsonObj, level) {
  let state;
  let month;
  if (typeof jsonObj == "object" && jsonObj != null) {
    let array = Object.keys(jsonObj);
    for (const index of array) {
      level === 1
        ? ((state = index),
          await console.log(`state: ${state}`),
          await traverse(jsonObj[index], level + 1))
        : level === 2
        ? ((month = index),
          await console.log(`month: ${month}`),
          await traverse(jsonObj[index], level + 1))
        : (await console.log(`Hooray! produce.`), (level = 0));
    }
  }
}

// traverse(data, 1);
console.log(data);
