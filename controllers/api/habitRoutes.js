const router = require("express").Router();
const { Habit, User } = require("../../models");

// findAll habits by userId
router.get("/", async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId);

    const habitData = await Habit.findAll({
      where: { user_id: userId },
    });

    res.status(200).json(habitData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
