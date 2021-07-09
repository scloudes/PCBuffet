const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const computerRouter = require("./routes/computer.route");
const categoryRouter = require("./routes/category.route");

require("./lib/mongo");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

//Set routes
app.use("/api", computerRouter);
app.use("/api", categoryRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up - http://localhost:${server.address().port}`);
});
