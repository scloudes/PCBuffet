const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const computerRouter = require("./routes/computer.route");

require("./lib/mongo");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Set routes
app.use("/api", cors(), computerRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up - http://localhost:${server.address().port}`);
});
