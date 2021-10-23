const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const data = require("./responce.json");

// http://localhost:3001/responce?page=1&limit=5

// Pagination solution find from:
// https://youtu.be/ZX3qt0UWifc
app.get("/responce", paginatedResponce(data), (req, res) => {
  res.json(res.paginatedResults);
});

//This is a middleware to trigger before any other functions in this process.
//PaginatedResponce as a middleware allow us to use the same structure for many different methods such as
//Post, Put, etc.
function paginatedResponce(model) {
  //Like any other middleware we need to have req, res, next.
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.responce = model.slice(startIndex, endIndex);
    res.paginatedResults = results;

    //Next pass us to call the next function.
    next();
  };
}

app.listen(port, () => {
  console.log("I am Listening");
});
