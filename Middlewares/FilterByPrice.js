const { products } = require("../data");

const filterByPrice = (req, res, next) => {
  const { keyPrice } = req.query;
  if (keyPrice) {
    const filteredProducts = products.filter((e) => e.price >= keyPrice);
    // return res.send({ products: filteredProducts });
    req.products = filteredProducts;
  }
  next();
};
module.exports = filterByPrice;
