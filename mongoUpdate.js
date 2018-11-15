const mongoose = require("mongoose");
// const states = require("./test-objects/locationState");
const months = require("./test-objects/months");
const State = require("./models/State");
const addDataModel = require("./mongoUtilities/addDataModel");
const deleteModel = require("./mongoUtilities/deleteModel");
const setArray = require("./mongoUtilities/setArray");

mongoose.connect(
  "mongodb://JPM_13:rcnN6i7vyDeXeB5@cluster0-shard-00-00-y5hkl.mongodb.net:27017,cluster0-shard-00-01-y5hkl.mongodb.net:27017,cluster0-shard-00-02-y5hkl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
  {
    useNewUrlParser: true
  }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected");
});

// addDataModel();
// deleteModel({ state: "alaska" });

async function iterateArray(array) {
  for (const index of array) {
    await setArray("Alabama", index);
  }
  console.log("done!");
}
iterateArray(months);
module.exports;
