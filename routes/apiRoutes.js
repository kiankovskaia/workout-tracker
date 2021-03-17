const Router = require("express").Router();

const workoutRouter = require("./workoutRouter.js");


Router.use("/api", workoutRouter);


module.exports = Router;