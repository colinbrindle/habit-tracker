// Requiring important libraries
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tracker extends Model {}

Tracker.init(
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
      unique: true,
      validate: {
        isNumeric: true,
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
    modelName: "tracker",
  }
);

module.exports = Tracker;
