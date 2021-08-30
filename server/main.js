const express = require('express')
const app = express()
const mongoose = require("mongoose");
const bookingRouter = require("./routes/bookingRouter");
const adminRouter = require("./routes/adminRouter");
const cors = require("cors");
require("dotenv").config();
app.use(express.json())
app.use(cors())
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  };


mongoose.connect(process.env.DB_LOGIN, options, (err) => {
    if (err) return;
    app.listen(8000, () => {
      console.log("Portnumber:8000");
     
    });
  });
  app.use(bookingRouter)
  app.use(adminRouter)