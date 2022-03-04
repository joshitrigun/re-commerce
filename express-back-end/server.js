const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8848;
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.log(err)
  })
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);




app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})