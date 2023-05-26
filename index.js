const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config();

app.listen(8800,()=>{
    console.log("backend server is running")
})