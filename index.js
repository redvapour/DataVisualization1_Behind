const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const chartOne = require("./router/one");
const chartTwo = require("./router/two");
const chartThree = require("./router/three");
const chartFour = require("./router/four");
const charMap = require("./router/map");
app.use("/one", chartOne);
app.use("/two", chartTwo);
app.use("/three", chartThree);
app.use("/four", chartFour);
app.use("/map", charMap);

app.listen(80, () => {
  console.log("服务已启动，监听中....");
});
