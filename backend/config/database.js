require("dotenv").config();
const mongoose = require("mongoose");

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connection Success");
  } catch (error) {
    console.error("MongoDB database connection Fail");
    process.exit(1);
  }
};

module.exports = connectDataBase;
