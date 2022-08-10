let express = require("express");
let router = express.Router();
let oneData = require("../mock/two.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是two的路由地址", chartData: oneData });
});

module.exports = router;
