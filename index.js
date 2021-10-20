const express = require("express");
const app = express();

const generateRandomStatus =
  require("./utilities/GenerateRandomStatus").generateRandomStatus;
const generateRandomDate =
  require("./utilities/generateRandomDate").generateRandomDate;
  
//jsonfile is a library to generate json files.
const jsonFile = require("jsonfile");
const output = "responce.json";

const port = process.env.PORT || 3001;

const outputData = [];

for (let i = 0; i < 1; i++) {
  const amount = "$" + parseInt(Math.random() * 1000);
  const date = generateRandomDate(new Date(2012, 0, 1), new Date());
  const status = generateRandomStatus(parseInt(Math.random() * 4));
  outputData.push({ amount: amount, date: date, status: status });
}

app.get("/reciepts", (req, res) => {
  res.status(200).send(outputData);
});
app.listen(port, () => {
  console.log(`API Server is Running on ${port}`);
});
