const express = require("express");
const { users } = require("../data");
const userRouter = express.Router();

/**
 * @params GET /users/
 * @description GET users
 * @acess public
 */

userRouter.get("/", (req, res) => {
  res.send(users);
});

/**
 * @params GET /users/:iduser
 * @description GET user one details
 * @acess public
 */

userRouter.get(`/:iduser`, (req, res) => {
  const { iduser } = req.params;
  const user = users.find((el) => el.uid == iduser);
  if (!user) {
    return res.status(400).send("not found");
  }
  res.send({ user });
});

module.exports = userRouter;
