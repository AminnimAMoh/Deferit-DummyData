const expect = require("chai").expect;
const generateRandomStatus =
  require("../utilities/GenerateRandomStatus").generateRandomStatus;

describe("Status test", () => {
  it("Should correctly prove in 1 case a random index gain a correct value for status.", () => {
    expect(generateRandomStatus(3)).to.equal('paid');
  });
});
