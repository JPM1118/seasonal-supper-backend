async function setArray(tempState, tempMonth) {
  const puppeteerFunc = require("./../test-objects/puppeteerFunc");
  const mongoose = require("mongoose");
  const State = require("../models/State");

  // const tempState = "Alabama";
  // const tempMonth = "February";

  let array = await puppeteerFunc(tempState, tempMonth);

  array = array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });

  console.log(array);

  let setObjProp = "month." + tempMonth + ".produce";
  let setObjPath = { [setObjProp]: array };

  State.findOneAndUpdate({ state: tempState }, { $set: setObjPath })
    .exec()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}

setArray();
module.exports = setArray;
