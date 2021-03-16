// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose');
require('dotenv').config();


//  initiate + set foundation for port 

const port = process.env.PORT || 8080


const db = require("./models");
const { Router } = require("express");

const app = express();


// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static files to public folder 

app.use(express.static('public'));


//connection to MongoDB

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  ).then(() => console.log("connected to DATABASE")).catch(error =>{
    console.log(error)
 
})

// Require routes
const htmlRoutes = require("./routes/htmlRouter");
app.use("/", htmlRoutes);
// require("./routes/api-routes.js")(app);
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);


app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});