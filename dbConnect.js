const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://harshithasony088:sonymongo123@cluster0.pto1c.mongodb.net/TheNewsHub",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.on("connected", () => console.log("Connection successful"));
connection.on("Error", () => console.log("Connection failed"));
module.export = mongoose;
