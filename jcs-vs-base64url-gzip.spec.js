const { stringify } = JSON; // not a hashable representation of the same object
const canonicalize = require("canonicalize"); // hashable representation of the same object.
const base64url = require("base64url");
const { gzip } = require("node-gzip");

const doWork = () => {
  let data = {};
  // smaller n, greater saving....
  for (let i = 0; i < 100; i++) {
    data = {
      ...data,
      [i]: "foo" + i + "bar" + (i % 2),
      [i + "baz"]: "bob" + (i % 3),
    };
  }
  return data;
};

const largeObject = doWork();

describe("canonicalize vc base64url", () => {
  let canonicalizeLength;
  let base64urlLength;
  test("canonicalize size gzip", async () => {
    const stringData = canonicalize(largeObject);
    const compressed = await gzip(stringData);
    canonicalizeLength = compressed.length;
    console.log("canonicalize compressed buffer length ", canonicalizeLength);
  });

  test("base64url size gzip", async () => {
    const stringData = base64url(stringify(largeObject));
    const compressed = await gzip(stringData);
    base64urlLength = compressed.length;
    console.log("base64url compressed buffer length ", base64urlLength);
  });

  test("difference", async () => {
    const dif =
      (100 * (base64urlLength - canonicalizeLength)) / canonicalizeLength;
    console.log("canonicalize space savings: ", dif, "%");
  });
});
