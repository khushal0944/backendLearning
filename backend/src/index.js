import dotenv from "dotenv";
// require('dotenv').config();
import connectDB from "./db/index.js";
import app from './app.js'
import cookieParser from 'cookie-parser'

dotenv.config();


connectDB()
.then(()=>{
    app.on((error)=>{
        console.log("server failed due to ",error)
    })
    app.listen(process.env.PORT || 5000,()=>{
        console.log("Server is running at port ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log("Mongo DB Connection Failed ", error)
})