require("dotenv").config();
require("express-async-errors");
const swaggerUi = require("swagger-ui-express");
const { openApiSpec } = require("./openapispec.js");
const express = require("express");
const rateLimiter = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 3000;
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 60,
  })
);
const connectDB = require("./db/connect");

const productsRouter = require("./routes/products");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

app.use(express.json());

app.use("/api/v1/products", productsRouter);

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.get("*", (req, res) => {
  res.redirect("/documentation");
}); // uncomment for production

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
