function addDataModel() {
  const mongoose = require("mongoose");
  const State = require("../models/State");
  const states = require("../test-objects/states");
  // const states = ["arizona", "arkansas"];

  async function processArray(array) {
    for (const index of array) {
      await saveToMongo(index);
    }
  }
  async function saveToMongo(item) {
    let itemModel = new State({ _id: mongoose.Types.ObjectId(), state: item });
    await itemModel.save().catch(err => console.log(err));
  }
  processArray(states).catch(error => console.error(error));
}
module.exports = addDataModel;
