const express = require("express");
const app = express();
const port = 3000;

const beerNum = 99;

// for (let i = 99; i <= 0; i--) {
//   beerNum -= 1;
// }

app.get("/", (req, res) => {
  res.send(`
    <h1>99 bottles of beer on the wall</h1>
    <a href='http://localhost:3000/${
      beerNum - 1
    }'> Take one down, pass it around </a>`);
});

app.get("/:number_of_bottles", (req, res) => {
  res.send(`<h2>${
    req.params.number_of_bottles
  } bottles of beer on the wall </h2>
  <a href='http://localhost:3000/${
    req.params.number_of_bottles - 1
  }'> Take one down, pass it around </a>`);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
