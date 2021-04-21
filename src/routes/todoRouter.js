const express = require("express");
const checkTask = require("../controllers/checkTask");
const createItem = require("../controllers/createItem");
const deleteElement = require("../controllers/deleteElement");
const getAllTasks = require("../controllers/getAllTask");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createItem);
router.patch("/", checkTask);
router.delete("/:task_id", deleteElement);

module.exports = router;
