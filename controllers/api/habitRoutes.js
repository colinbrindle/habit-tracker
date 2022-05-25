const router = require("express").Router();
const { Habit } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const habitData = await Habit.findAll();
    res.status(200).json(habitData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
