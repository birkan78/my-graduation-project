const productModel = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There's an error with the Server " });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
