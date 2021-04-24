const express = require("express");
const router = express.Router();

const websiteController = require("../controllers/websiteController");

router.post("/testWebsite", websiteController.checkWebsite );
module.exports = router;
