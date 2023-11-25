const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", usersController.createUser);
router.post("/login", usersController.loginUser);
router.get("/me", authMiddleware, usersController.getUserData);

module.exports = router;
