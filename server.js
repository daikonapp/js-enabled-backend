const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`the server has started on port ${PORT}`));

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING ||
    "mongodb://127.0.0.1:27017/foodstuff",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) throw error;
    console.log("MongoDB connection established.");
  }
);

app.use("/food", require("./routes/dishRouter"));
