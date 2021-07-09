const Category = require("../models/category");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { category, questions } = req.body;
    const newCategory = new Category({ category, questions });
    const categorySaved = await newCategory.save();
    res.status(201).json(categorySaved);
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.categoryId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId);
    res.status(200).json(deletedCategory);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
