require("dotenv").config;
const connectDB = require("./db/connect");

const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://meeruzairwashere:191123_Khair.@learningbackend.spoupnw.mongodb.net/04-STORE-API?retryWrites=true&w=majority"
    );
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
