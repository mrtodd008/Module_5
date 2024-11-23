//calculatorRoutes.js ;*//
const express = require("express");
const router = express.Router();
const calculatorController = require("../Controllers/calculatorController");

// new route for adding two numbers
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});
module.exports = router;
