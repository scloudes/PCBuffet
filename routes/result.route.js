const express = require("express");

const {
    analyzeComputers
} = require("../controllers/computer");


const router = express.Router();

router.get("/result/", analyzeComputers);

module.exports = router;
