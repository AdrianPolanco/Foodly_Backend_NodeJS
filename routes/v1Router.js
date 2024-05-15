const v1Router = require("express").Router();
const categoryRouter = require("./category");
const restaurantRouter = require("./restaurants");
const foodRouter = require("./foods");

v1Router.use("/categories", categoryRouter);
v1Router.use("/restaurants", restaurantRouter);
v1Router.use("/foods", foodRouter);

module.exports = v1Router;
