const { stringify } = JSON; // not a hashable representation of the same object
const canonicalize = require("canonicalize"); // hashable representation of the same object.

const doWork = (func) => {
  for (let i = 0; i < 1000; i++) {
    func({ value: i });
  }
};

describe("stringify vc canonicalize", () => {
  test("stringify performance", () => {
    var t0 = performance.now();
    doWork(stringify);
    var t1 = performance.now();
    console.log("stringify took " + (t1 - t0) + " milliseconds.");
  });
  test("canonicalize performance", () => {
    var t0 = performance.now();
    doWork(canonicalize);
    var t1 = performance.now();
    console.log("canonicalize took " + (t1 - t0) + " milliseconds.");
  });
});
