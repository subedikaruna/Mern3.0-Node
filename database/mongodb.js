const mongoose = require("mongoose");
async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://karunasubedi:karuna123@cluster0.qewx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected successfully");
}
module.exports = connectToDatabase;
