const express = require("express");
const createItem = require("../controllers/createItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "example" });
});

router.post("/", createItem);

module.exports = router;
