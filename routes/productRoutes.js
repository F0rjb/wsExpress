const express = require("express");
const { products, users } = require("../data");
const filterByPrice = require("../Middlewares/FilterByPrice");
const Router = express.Router();

/**
 * @params GET /products/
 * @description GET allproducts
 * @acess public
 */
Router.get("/", filterByPrice, (req, res) => {
  //   console.log(req.products);
  const prods = req.products;
  res.send({ products: prods ? prods : products });
});

/**
 * @params GET /products/:iduser
 * @description GET products of one user
 * @acess public
 */

Router.get("/:iduser", (req, res) => {
  const { iduser } = req.params;
  const user = users.find((el) => el.uid == iduser);
  if (!user) {
    return res.status(400).send("not found");
  }
  const myProducts = products.filter((e) => e.userId == iduser);
  const response = {
    name: user.name,
    lastname: user.lastname,
    products: myProducts.length ? myProducts : "No products",
  };
  res.send(response);
});
module.exports = Router;
