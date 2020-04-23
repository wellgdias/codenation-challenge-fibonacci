const { expect, assert } = require("chai");
const { fibonacci, isFibonacci } = require("../src");

describe("fibonacci", () => {
  it("must obtain an array with the fibonacci sequence", () => {
    const result = fibonacci();
    expect(result).to.be.an("array");
  });

  it("checks if the fibonacci sequence starts with 0", () => {
    const result = fibonacci();
    assert.equal(0, result.indexOf(0));
  });

  it("should get fibonacci sequence until it passes 350", () => {
    const result = fibonacci();
    assert.equal(377, result[result.length - 1]);
  });

  it("checks if the 7th fibonacci sequence is equal to 8", () => {
    const result = fibonacci();
    expect(result[6]).to.equal(8);
  });
});

describe("isFibonacci", () => {
  it("should return true when the number is a fibonacci", () => {
    const result = isFibonacci(5);
    expect(result).to.be.true;
  });

  it("should return false when the number isn't a fibonacci", () => {
    const result = isFibonacci(4);
    expect(result).to.be.false;
  });
});
