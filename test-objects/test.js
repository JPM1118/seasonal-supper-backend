
async function iterateStatesAndMonths(function){
const months = require("./months");
const states = require("./states");
let s = 0;
let m = 0;
async function iterateArrays() {

  await console.log(`state:${states[s]}, month: ${months[m]}`);
  if (s == states.length - 1 && m == months.length - 1) {
    return;
  } else if (m == months.length - 1) {
    m = 0;
    s += 1;
    await iterateArrays();
  } else {
    m += 1;
    await iterateArrays();
  }
}
}
// async function traverse(jsonObj, level) {
//   let state;
//   let month;
//   if (typeof jsonObj == "object" && jsonObj != null) {
//     let array = Object.keys(jsonObj);
//     for (const index of array) {
//       level === 1
//         ? ((state = index),
//           await console.log(`state: ${state}`),
//           await traverse(jsonObj[index], level + 1))
//         : level === 2
//         ? ((month = index),
//           await console.log(`month: ${month}`),
//           await traverse(jsonObj[index], level + 1))
//         : (await console.log(`Hooray! produce.`), (level = 0));
//     }
//   }
// }

// traverse(data, 1);
// console.log(data);
