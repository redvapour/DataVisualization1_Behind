let express = require("express");
let router = express.Router();
let mapData = require("../mock/china.json");

router.get("/data", (req, res) => {
  res.send({ msg: "我是map的路由地址", charData: mapData });
});

module.exports = router;
