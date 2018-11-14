const mongoose = require("mongoose");
const states = require("./test-objects/locationState");
const Data = require("./models/data");

mongoose.connect(
  "mongodb://JPM_13:rcnN6i7vyDeXeB5@cluster0-shard-00-00-y5hkl.mongodb.net:27017,cluster0-shard-00-01-y5hkl.mongodb.net:27017,cluster0-shard-00-02-y5hkl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
  {
    useNewUrlParser: true
  }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we gucci");
});
async function processArray(array) {
  for (const index of array) {
    await saveToMongo(index);
  }
}
async function saveToMongo(item) {
  let itemModel = new Data({ _id: mongoose.Types.ObjectId(), state: item });
  await itemModel.save().catch(err => console.log(err));
}
processArray(states).catch(error => console.error(error));

module.exports;
