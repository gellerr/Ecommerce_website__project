const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCategories,
  updateCategories,
} = require("../controller/category");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const shortid = require("shortid");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
router.post(
  "/category/create",
  requireSignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getcategory", getCategories);
module.exports = router;
router.post(
  "/category/update",
  upload.array("categoryImage"),
  updateCategories
);
