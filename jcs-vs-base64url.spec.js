const { stringify } = JSON; // not a hashable representation of the same object
const canonicalize = require("canonicalize"); // hashable representation of the same object.
const base64url = require("base64url");

const doWork = (func) => {
  for (let i = 0; i < 1000; i++) {
    func({ value: i });
  }
};

describe("canonicalize vc base64url", () => {
  test("canonicalize performance", () => {
    var t0 = performance.now();
    doWork(canonicalize);
    var t1 = performance.now();
    console.log("canonicalize took " + (t1 - t0) + " milliseconds.");
  });

  test("base64url performance", () => {
    var t0 = performance.now();
    const func = (arg) => {
      base64url(stringify(arg));
    };
    doWork(func);
    var t1 = performance.now();
    console.log("base64url took " + (t1 - t0) + " milliseconds.");
  });
});
