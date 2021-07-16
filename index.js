const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const computerRouter = require("./routes/computer.route");
const categoryRouter = require("./routes/category.route");
const resultRouter = require("./routes/result.route");

require("./lib/mongo");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

//Set routes
app.use("/api", computerRouter);
app.use("/api", categoryRouter);
app.use("/api", resultRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up - http://localhost:${server.address().port}`);
});
