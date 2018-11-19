async function puppeteerFunc(state, month) {
  const puppeteer = require("puppeteer");

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

  let arr = [];
  const browser = await puppeteer.launch();

  arr = [
    ...(await extractProduce(state, month, "early")),
    ...(await extractProduce(state, month, "late"))
  ];

  await browser.close();
  return arr;
}
// puppeteerFunc("Alabama", "January");
module.exports = puppeteerFunc;
