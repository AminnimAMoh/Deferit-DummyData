class RecieptsData {
  paymentStates = ["processing", "scheduled", "unable to pay", "paid"];

  constructor() {}
  generateRandomDate = (start, end) => {
    //Solution from https://www.codegrepper.com/code-examples/javascript/generate+random+date+in+javascript
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };
  generateRandomStatus = (index) => {
    return paymentStates[index];
  };
}

module.exports.RecieptsData=RecieptsData;
