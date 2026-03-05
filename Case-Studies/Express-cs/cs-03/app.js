const express = require("express");
const app = express();

const productsRouter = require("./routes/products");

const port = 3000;

// Middleware to read JSON body
app.use(express.json());

// Mount products router
app.use("/products", productsRouter);

// Home route
app.get("/", (req, res) => {
  res.send("Neighborhood Food Store API");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});