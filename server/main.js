
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.json())


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
 
  };

  mongoose.connect(process.env.DB_LOGIN, options, (err)=> {
      if (err) return;

      app.listen(8000, ()=> {
          console.log("Portnummer:8000");
      })
  })