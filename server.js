const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const { users, products } = require("./data.js");
const Router = require("./routes/productRoutes.js");
const userRouter = require("./routes/userRoutes.js");

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`the server runs in ${port}`)
);

app.set("view engine", "ejs");
// const logger = (req, res, next) => {
//   console.log("hello");
//   next();
// };
// const logger2 = (req, res, next) => {
//   console.log("hello users");
//   next();
// };
// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");

//   //   res.send(users);
// });
// app.use(logger);

// app.get("/home", logger2, (req, res) => {
//   var options = {
//     root: path.join(__dirname),
//   };
//   res.sendFile("/public/home.html", options);
// });

// app.get("/contact", (req, res) => {
//   res.sendFile("/public/contact.html", { root: __dirname });
// });
// app.get("/products", (req, res) => {
//   res.send(products);
// });

app.get("/ejs", (req, res) => {
  res.render("index", {
    users: users,
    products: products,
  });
});

app.use("/products", Router);
app.use("/users", userRouter);
app.use(express.static(path.join(__dirname, "public")));
