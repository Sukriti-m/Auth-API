require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const cookieParser = require("cookie-parser");
const { response } = require("express");
const cors = require("cors");
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
mongoose.connect(process.env.userDB);

const homeRoute=require("./routes/home");
const userRoute=require("./routes/user");
const otpRoute=require("./routes/otp");

app.get("/", (req,res)=>{
    res.send("Hi, the API is working");

});


app.use(express.json());
app.use("/api", userRoute);
app.use("/api/home", homeRoute);
app.use("/api", otpRoute);

app.listen(process.env.PORT || 3000,(err)=>{if(!err)
    console.log("Server started");
    });
