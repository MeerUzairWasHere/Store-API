require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

app.use(express.json());

app.use("/api/v1/products", productsRouter);

app.get("/", (req, res) => {
  res.send(
    "<h1>Store API</h1></br><a href='/api/v1/products'>Get all products</a></br> <a href='/api/v1/products/?sort=name'>Get products sorted by name</a>"
  );
});

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log("Server is running on port: " + port + "...");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
