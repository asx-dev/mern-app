const express = require("express");
const router = express.Router();
const goalsControllers = require("../controllers/goalsControllers");

router.get("/", goalsControllers.getGoal);
router.post("/", goalsControllers.createGoal);
router.put("/:id", goalsControllers.updateGoal);
router.delete("/:id", goalsControllers.deleteGoal);

module.exports = router;
