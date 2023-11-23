const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const colors = require("colors");
const goalsRoutes = require("./routes/goalsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

// Databases
connectDB();

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goals", goalsRoutes);
app.use("/api/users", usersRoutes);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Listening at port ${PORT}`));
