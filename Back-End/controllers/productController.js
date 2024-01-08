import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: User, as: "User" }],
    });
    return res.status(200).json({
      data: products,
      message: "success",
      status: 200,
    });
  } catch (error) {
    res.status(400).json({
      data: null,
      message: error.message,
      status: 400,
    });
  }
};

// Get a single product
export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id, {
      include: [{ model: User, as: "User" }],
    });
    if (product) {
      return res.status(200).json({
        data: product,
        message: "success",
        status: 200,
      });
    } else {
      res.status(404).json({
        data: null,
        message: `Product not found`,
        status: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "Internal server error",
      status: 500,
    });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { title, category, description, price, UserId } = req.body;
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      data: product,
      message: "Product created successfully!",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "Internal Server Error",
      status: 500,
      error: true,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const existingProduct = await Product.findByPk(id);
    if (!existingProduct) {
      return res.status(404).json({
        data: null,
        message: `Product with Id: ${id} not found!`,
        status: 404,
      });
    }
    await Product.update(
      { ...req.body },
      {
        where: { id },
      }
    );

    const updatedProduct = await Product.findByPk(id);
    if (updatedProduct) {
      return res.status(200).json({
        data: updatedProduct,
        message: `Product with ID: ${id} updated successfully!`,
        status: 200,
      });
    } else {
      return res.status(400).json({
        data: null,
        message: `Failed to update product with ID: ${id}`,
        status: 400,
      });
    }
  } catch (error) {
    res.status(500).json({
      data: null,
      message: error.message,
      status: 500,
    });
  }
};

// delete Product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByPk(id);
    if (!deletedProduct) {
      return res.status().json({
        message: "No product is found!",
        status: 404,
        error: true,
      });
    }
    await Product.destroy({ where: { id } });
    res.status(200).json({
      message: `Product ${deletedProduct.title} is deleted`,
      status: 200,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      error: true,
    });
  }
};
