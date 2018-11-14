async function pushArray() {
  //   const puppeteerFunc = require("./../test-objects/puppeteerFunc");
  const mongoose = require("mongoose");
  const State = require("./../models/State");

  let string =
    "Carrots,Celery,Celery Root,Chard,Chicories,Cilantro,Collard Greens,Endive,Fennel,Green Onions,Horseradish,Kale,Kohlrabi,Mint,Mustard Greens,Oregano,Parsley,Parsnips,Pecans,Radicchio,Rapini,Rosemary,Sage,Sprouts,Sunchokes,Tarragon,Thyme,Turnips,Yams,Carrots,Celery,Celery Root,Chard,Chicories,Cilantro,Collard Greens,Endive,Fennel,Green Onions,Horseradish,Kale,Kohlrabi,Mint,Mustard Greens,Oregano,Parsley,Parsnips,Pecans,Radicchio,Rapini,Rosemary,Sage,Sprouts,Sunchokes,Tarragon,Thyme,Turnips,Yams";

  array = string.split(",");
  array = array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });

  //   console.log(array);

  State.findOneAndUpdate(
    { state: "Alabama" },
    { $set: { "month.January.produce": array } }
  )
    .exec()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}

pushArray();
module.exports = pushArray;
