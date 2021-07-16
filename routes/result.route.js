const express = require("express");

const {
    analyzeComputers
} = require("../controllers/computer");


const router = express.Router();

router.post("/result/", analyzeComputers);

module.exports = router;
