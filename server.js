const express = require("express");
const app = express();
var cors = require("cors");
const userRoute = require("./routes/userRoute");
const newsRoute = require("./routes/newsRoute");

app.use(cors());
app.use(express.json());
const dbConnect = require("./dbConnect");
const port = 5000;

app.use("/api/newsitems/", newsRoute);
app.use("/api/users/", userRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
