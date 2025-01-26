import mongoose from "mongoose"

export const connectDB = async() =>{
    try {
     const conn = await mongoose.connect(process.env.MONGO_URL);
     console.log("Connected succesfully");
        
    } catch (error) {
        console.log("Error connecting to mongodb");
        process.exit(1);
    }
}