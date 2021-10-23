const express = require("express");
const app = express();
const RecieptsData=require("./utilities/db").RecieptsData;

//jsonfile is a library to generate json files.
const jsonFile = require("jsonfile");
const outputFile = "responce.json";

const port = process.env.PORT || 3001;

const outputData = [];

for (let i = 0; i < 100; i++) {
  outputData.push(new RecieptsData(i).populate());
}

jsonFile.writeFile(outputFile, outputData, { spaces: 2 }, function (err) {
    console.log("responce.json is created and populated with the generated data.");
  });
