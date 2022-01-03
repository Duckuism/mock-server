var express = require("express");
var detailJson = require("./__fixtures__/detail.json");
var codesJson = require("./__fixtures__/codes.json");
var listJson = require("./__fixtures__/list.json");
var roomsJson = require("./__fixtures__/rooms.json");
var productJson = require("./__fixtures__/product.json");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/stay/v1/lodging/detail/:id", function (req, res, next) {
  res.json(detailJson);
});
router.get("/stay/v1/lodging/codes", function (req, res, next) {
  res.json(codesJson);
});
router.post("/stay/v1/lodging/list", function (req, res, next) {
  console.log(JSON.stringify(req.body, null, 4));
  res.json(listJson);
});
router.post("/stay/v1/lodging/rooms/:id", function (req, res, next) {
  res.json(roomsJson);
});
router.get("/product/products/:productId", function (req, res, next) {
  res.json(productJson);
});
//상세에서 필요한 다른 API추가
module.exports = router;
