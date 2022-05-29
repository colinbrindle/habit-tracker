const router = require("express").Router();
const { User, Habit } = require("../models");
const withAuth = require("../utils/withAuth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
