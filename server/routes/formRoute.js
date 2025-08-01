const express = require("express");
const router = express.Router();
const { handleForm } = require("../controllers/formController");

router.post("/", handleForm);

module.exports = router;
