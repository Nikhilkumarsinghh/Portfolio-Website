const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
router.post("/", contactController.handleContact);
module.exports = router;
