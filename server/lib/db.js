import mongoose from "mongoose";

// function to connect to the mongodb database

export const connectDB = async () =>{
    
    try {
console.log("Connecting to:", process.env.MONGODB_URI);

        mongoose.connection.on('connected',()=>console.log("database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    } catch(error) {
        console.log(error);
    }
}
