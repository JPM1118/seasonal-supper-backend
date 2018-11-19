async function iterateStatesAndMonths() {
  const setArray = require("./setArray");
  const months = require("./../test-objects/months");
  const states = require("./../test-objects/states");
  let s = 0;
  let m = 0;
  async function iterateArrays() {
    await setArray(states[s], months[m]).catch(err => console.log(err));
    if (s == states.length - 1 && m == months.length - 1) {
      return;
    } else if (m == months.length - 1) {
      m = 0;
      s += 1;
      await iterateArrays().catch(err => console.log(err));
    } else {
      m += 1;
      await iterateArrays().catch(err => console.log(err));
    }
  }
  iterateArrays().catch(err => console.log(err));
}
module.exports = iterateStatesAndMonths;
