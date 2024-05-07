const v1Router = require("express").Router();
const categoryRouter = require("./category");

v1Router.use("/categories", categoryRouter);

module.exports = v1Router;
