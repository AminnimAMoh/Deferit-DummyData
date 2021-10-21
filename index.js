const express = require("express");
const app = express();
const RecieptsData=require("./utilities/db").RecieptsData;

//jsonfile is a library to generate json files.
const jsonFile = require("jsonfile");
const output = "responce.json";

const port = process.env.PORT || 3001;

const outputData = [];

for (let i = 0; i < 1; i++) {
  outputData.push(new RecieptsData().populate());
}

app.get("/reciepts", (req, res) => {
  res.status(200).send(outputData);
});
app.listen(port, () => {
  console.log(`API Server is Running on ${port}`);
});
