const express = require("express");

const {
  getComputers,
  getComputerById,
  createComputer,
  updateComputer,
  deleteComputer,
} = require("../controllers/computer");

const router = express.Router();

router.get("computer/", getComputers);
router.get("computer/:computerId", getComputerById);
router.post("computer/", createComputer);
router.put("computer/:computerId", updateComputer);
router.delete("computer/:computerId", deleteComputer);

module.exports = router;
