const express = require("express");
const checkTask = require("../controllers/checkTask");
const createItem = require("../controllers/createItem");
const getAllTasks = require("../controllers/getAllTask");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createItem);
router.patch("/", checkTask);

module.exports = router;
