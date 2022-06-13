const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Person, binary } = require("./strategy.js");

describe("tests run on the 'strategy.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "strategy_test.js");
  });
  // initialisation
  const personOne = new Person(binary.aware);
  const personTwo = new Person(binary.oblivious);
  // functional tests
  it("checks that '10' is understood as '2' for a binary knower", () => {
    wish(personOne.read(10) === 2);
  });
  it("checks that '10' is understood as '10' for a binary oblivious", () => {
    wish(personTwo.read(10) === 10);
  });
});
