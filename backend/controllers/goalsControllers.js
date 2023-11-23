const getGoal = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};
const createGoal = (req, res) => {
  if (!req.body.text) {
    throw Error("Please introduced valid text");
  }
  res.status(200).json({ message: "Create goals" });
};
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoal, createGoal, updateGoal, deleteGoal };
