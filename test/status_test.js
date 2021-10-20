const expect = require("chai").expect;
const assert= require("chai").assert;
const generateRandomStatus =
  require("../utilities/GenerateRandomStatus").generateRandomStatus;

let res = [];
const paymentStates = ["processing", "scheduled", "unable to pay", "paid"];
for (let i = 0; i < 10000; i++) {
  res.push(generateRandomStatus(parseInt(Math.random() * 4)));
}

describe("Status test", () => {
  it("Should correctly prove in 1 case a random index gain a correct value for status.", () => {
    expect(generateRandomStatus(3)).to.equal("paid");
  });
  it("Should correctly prove in 100 cases a random index Will Not Have UNDEFINED return.", () => {
    expect(res).to.not.include.undefined;
  });
  it("Should correctly prove in 100 cases a random index Will Not Have EMPTY return.", () => {
    expect(res).to.not.include('');
  });
  it("Should correctly prove in 100 cases a random index Will Not return wrrong value Amin.", () => {
    expect(res).to.not.include('Amin');
  });
  it("Should correctly prove in 100 cases a random index Will Not return wrrong value Amin.", () => {
    expect(res).to.not.include('Amin');
  });
  it("Should correctly prove in 100 cases a random index Will Not return includeds processing.", () => {
    expect(res).to.include('processing');
  });
  it("Should correctly prove in 100 cases a random index Will Not return paid.", () => {
    expect(res).to.include("paid");
  });
  it("Should correctly prove in 100 cases a random index Will Not return scheduled.", () => {
    expect(res).to.include("scheduled");
  });
  it("Should correctly prove in 100 cases a random index Will Not return unable to pay.", () => {
    expect(res).to.include("unable to pay");
  });
  it("Should correctly prove in 100 cases a random index Will Not return processing.", () => {
    expect(res).to.include("processing");
  });
  it("Should correctly prove in 100 cases a random index Will Not return processing.", () => {
    expect(res).to.include(paymentStates);
  });
});
