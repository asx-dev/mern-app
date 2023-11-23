const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Please introduced valid text");
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {
      text: req.body.text,
    },
    { new: true }
  );
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoal, createGoal, updateGoal, deleteGoal };
