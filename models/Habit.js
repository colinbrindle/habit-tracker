// Requiring important libraries
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Habit extends Model {}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    habit_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.REAL,
      validate: {
        isNumeric: true,
      },
    },
    entry_date: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
    },
    note: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "habit",
  }
);

module.exports = Habit;
