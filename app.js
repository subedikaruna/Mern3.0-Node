const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  //   console.log(req);
  res.json({
    message: "I am girl",
  });
});

app.listen(3000, () => {
  console.log("Nodejs project has started");
});
