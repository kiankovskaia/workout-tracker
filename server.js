// dependencies
const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

//  initiate + set foundation for port 

const port = process.env.PORT || 8080

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static files to public folder 

app.use(express.static('public'));



//connection to MongoDB

mongoose.connect(
    process.env.MONGODB_URI || process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  ).then(() => console.log("connected to DATABASE")).catch(error =>{
    console.log(error)
    process.exit(1)
})



app.listen(port,() => {
    console.log(`listening on port ${port}`)
})