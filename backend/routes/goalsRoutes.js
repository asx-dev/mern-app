const express = require("express");
const router = express.Router();
const goalsControllers = require("../controllers/goalsControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, goalsControllers.getGoal);
router.post("/", authMiddleware, goalsControllers.createGoal);
router.put("/:id", authMiddleware, goalsControllers.updateGoal);
router.delete("/:id", authMiddleware, goalsControllers.deleteGoal);

module.exports = router;
