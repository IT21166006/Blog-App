const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

//env config
dotenv.config();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to blog app",
    });
});


// Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
      .white
  );
});