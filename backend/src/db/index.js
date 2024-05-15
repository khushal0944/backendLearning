
import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';



const connectDB = async ()=>{
    try {
        const connectedInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("\n Mongo DB Connected Successfully At",connectedInstance.connection.host)
    } catch (error) {
        console.error("MongoDB Connected Failed",error);
        process.exit(1)
    }
}

export default connectDB;