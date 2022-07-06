import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
dotenv.config()
// Routes
const app = express();
// middleware
app.use(bodyParser.json({ limit:'30mb',extended:true }))
app.use(bodyParser.urlencoded({ extended:true ,limit:'30mb'}))
const PORT = process.env.PORT || 5000;


mongoose
    .connect(process.env.MONGO_DB,
    {useNewUrlParser:true,useUnifiedTopology:true,})
    .then(()=>app.listen(
        PORT, () => {
            console.log(`running on port ${PORT}`);
        }
    ))
    .catch((error)=>{
        console.log(error);
    })

app.use('/auth',AuthRoute)