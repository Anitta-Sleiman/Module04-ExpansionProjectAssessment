import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js";

const Product = sequelize.define(
  "Product",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(["Laptops", "Phones"]),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.hasMany(Product, { foreignKey: "UserId" });
Product.belongsTo(User, { foreignKey: "UserId" });

export default Product;
