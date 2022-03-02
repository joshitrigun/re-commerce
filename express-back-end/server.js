const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8848;
const dotenv = require("dotenv");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err)
  })

app.get('/', (req, res) => {
  res.send('You are requesting');
})

app.get("/api/test", () => {
  console.log("testing success")
})

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})