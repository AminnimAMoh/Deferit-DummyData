const expect = require("chai").expect;
const generateRandomStatus =
  require("../utilities/GenerateRandomStatus").generateRandomStatus;

describe("Status test", () => {
  it("Should correctly prove in 100 cases a random index gain a correct value for status.", () => {
    expect(generateRandomStatus(4).toLocaleLowerCase.be.equal('paid'));
  });
});
