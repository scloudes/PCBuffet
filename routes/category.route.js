const express = require("express");

const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

const router = express.Router();

router.get("/category/", getCategories);
router.post("/category/", createCategory);
router.put("/category/:categoryId", updateCategory);
router.delete("/category/:categoryId", deleteCategory);

module.exports = router;
