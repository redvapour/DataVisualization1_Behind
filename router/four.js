let express = require("express");
let router = express.Router();
let oneData = require("../mock/four.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是four的路由地址", chartData: oneData });
});

module.exports = router;
