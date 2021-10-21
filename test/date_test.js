const expect = require("chai").expect;
const assert = require("chai").assert,
chaiDateString = require('chai-date-string');
const RecieptsData = require("../utilities/db").RecieptsData;

let res = [];
const paymentStates = ["processing", "scheduled", "unable to pay", "paid"];
for (let i = 0; i < 10; i++) {
  res.push(
    new RecieptsData().generateRandomDate(new Date(2012, 0, 1), new Date())
  );
}

describe("Data test", () => {
  it("Should correctly prove in 100 cases a random index Will Not Have UNDEFINED return.", () => {
    expect(res).to.not.include.undefined;
  });
  it("Should correctly prove in 100 cases a random index Will Not Have EMPTY return.", () => {
    expect(res).to.not.include("");
  });
  it("Should correctly prove in 100 cases a random index Will Not Have null return.", () => {
    expect(res).to.not.include(null);
  });
});
