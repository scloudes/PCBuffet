const express = require("express");

const {
  getComputers,
  getComputerById,
  createComputer,
  updateComputer,
  deleteComputer,
} = require("../controllers/computer");

const router = express.Router();

router.get("/", getComputers);
router.get("/:computerId", getComputerById);
router.post("/", createComputer);
router.put("/:computerId", updateComputer);
router.delete("/:computerId", deleteComputer);

module.exports = router;
