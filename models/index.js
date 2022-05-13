const User = require("./User");
const Habit = require("./Habit");

User.hasMany(Habit, {
  foreignKey: "user_id",
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Habit };
