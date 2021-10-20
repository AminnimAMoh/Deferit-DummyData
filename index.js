const express = require("express");
const app = express();

//jsonfile is a library to generate json files.
const jsonFile = require("jsonfile");
const output = "responce.json";

const port = process.env.PORT || 3001;

const outputData = [{}];

function generateRandomDate() {
  //Solution from https://www.codegrepper.com/code-examples/javascript/generate+random+date+in+javascript
  return new Date(
    start.getTime() + Math.random * (end.getTime() - start.getTime())
  );
}
for (let i = 0; i < 100; i++) {
  const amount = "$" + parseInt(Math.random() * 1000);
  const date = generateRandomDate();
}

app.get("/reciepts", (req, res) => {
  res.status(200).send({
    name: "This is a test responce.",
    status: "O.K",
  });
});
app.listen(port, () => {
  console.log(`API Server is Running on ${port}`);
});
