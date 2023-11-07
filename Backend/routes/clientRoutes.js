const express = require("express");
const router = express.Router();

const {
  getclient,
  createclient,
  updateclient,
  deleteclient,
} = require("../controller/client");

router.get("/getclient", getclient);
router.post("/createclient", createclient);
router.put("/updateclient", updateclient);
router.delete("/deleteclient", deleteclient);

module.exports = router;
