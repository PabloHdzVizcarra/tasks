const express = require("express");
const createItem = require("../controllers/createItem");
const getAllTasks = require("../controllers/getAllTask");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createItem);

module.exports = router;
