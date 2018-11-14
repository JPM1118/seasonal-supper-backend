function deleteModel(obj) {
  const mongoose = require("mongoose");
  const State = require("../models/State");
  State.deleteOne(obj)
    .exec()
    .then(console.log("success"))
    .catch(err => console.log(err));
}

module.exports = deleteModel;
