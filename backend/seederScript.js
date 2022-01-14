require("dotenv").config();

const productInfo = require("./data/products");
const Product = require("./models/Product");
const connectDatabase = require("./config/database");

connectDatabase();

const dataImport = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productInfo);

    console.log("Data Succesfully Imported");

    process.exit();
  } catch (error) {
    console.error("An error occurred while importing", error);
    process.exit(1);
  }
};

dataImport();
