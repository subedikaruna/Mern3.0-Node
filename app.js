const express = require("express");
const connectToDatabase = require("./database/mongodb");

const app = express();

connectToDatabase();

app.get("/", (req, res, next) => {
  //   console.log(req);
  res.status(200).json({
    message: "I am girl",
  });
});

app.listen(3000, () => {
  console.log("Nodejs project has started");
});

//mongodb+srv://karunasubedi:<password>@cluster0.qewx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
