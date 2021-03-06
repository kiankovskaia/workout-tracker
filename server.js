// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//  initiate + set foundation for port

const port = process.env.PORT || 8080;
const app = express();

// middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static files to public folder

app.use(express.static("public"));

//connection to MongoDB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// require("./routes/api-routes.js")(app);
const workoutRouter = require("./routes/workoutRouter");
app.use(workoutRouter);

// Require routes
const htmlRoutes = require("./routes/htmlRouter");
app.use(htmlRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
