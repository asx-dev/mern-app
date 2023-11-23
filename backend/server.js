const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalsRoutes = require("./routes/goalsRoutes");

app.use("/api/goals", goalsRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Listening at port ${PORT}`));
