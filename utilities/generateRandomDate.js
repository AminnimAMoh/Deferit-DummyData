const generateRandomDate=(start, end) =>{
  //Solution from https://www.codegrepper.com/code-examples/javascript/generate+random+date+in+javascript
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

module.exports.generateRandomDate= generateRandomDate;
