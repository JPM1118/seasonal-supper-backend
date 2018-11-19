async function setArray(tempState, tempMonth) {
  const puppeteerFunc = require("./../test-objects/puppeteerFunc");
  const mongoose = require("mongoose");
  const State = require("../models/State");

  let array = await puppeteerFunc(tempState, tempMonth).catch(err =>
    console.log(err)
  );

  array = await array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });

  await console.log(array);

  let setObjProp = "month." + tempMonth + ".produce";
  let setObjPath = { [setObjProp]: array };

  await State.findOneAndUpdate({ state: tempState }, { $set: setObjPath })
    .exec()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}

setArray();
module.exports = setArray;
