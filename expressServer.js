const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const data = require("./responce.json");
const jsonServer= require('json-server');

const server= jsonServer.create();
const router=jsonServer.router({responce});
const middleware=jsonServer.defaults();

// http://localhost:3001/responce?page=1&limit=5

// Pagination solution find from:
// https://youtu.be/ZX3qt0UWifc
const router=jsonServer.router(paginatedResponce(data));
app.get("/responce", paginatedResponce(data), (req, res) => {
  res.json(res.paginatedResults);
});



app.listen(port, () => {
  console.log("I am Listening");
});
