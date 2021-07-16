const Computer = require("../models/computer");

const getComputers = async (req, res, next) => {
  try {
    const Computers = await Computer.find();
    res.status(200).json(Computers);
  } catch (err) {
    next(err);
  }
};

const getComputerById = async (req, res, next) => {
  try {
    const computer = await Computer.findById(req.params.computerId);
    res.status(200).json(computer);
  } catch (err) {
    next(err);
  }
};

const createComputer = async (req, res, next) => {
  try {
    const { model, price, images, components, url } = req.body;
    const newComputer = new Computer({ model, price, images, components, url });
    const ComputerSaved = await newComputer.save();
    res.status(201).json(ComputerSaved);
  } catch (err) {
    next(err);
  }
};

const updateComputer = async (req, res, next) => {
  try {
    const updatedComputer = await Computer.findByIdAndUpdate(
      req.params.computerId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedComputer);
  } catch (err) {
    next(err);
  }
};

const deleteComputer = async (req, res, next) => {
  try {
    const computer = await Computer.findByIdAndDelete(req.params.computerId);
    res.status(200).json(computer);
  } catch (err) {
    next(err);
  }
};

const analyzeComputers = async (req, res, next) => {
  try {
    const computers = await Computer.find({
      price: { $lt: req.body.price },
    })
      .sort({ price: -1 })
      .limit(1);
    res.status(200).json(computers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getComputers,
  getComputerById,
  createComputer,
  updateComputer,
  deleteComputer,
  analyzeComputers,
};
