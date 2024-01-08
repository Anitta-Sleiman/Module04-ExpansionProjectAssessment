import sequelize from "../config/db.js"; 
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(["Admin", "Supplier"]),
      defaultValue: "Supplier",
    },
  },
  {
    timestamps: true,
  }
);

export default User;
