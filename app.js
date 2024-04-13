import express from "express";
import mongoose from "mongoose";
import houtelRoutes from"./routs/moganden.js"
const url = 'mongodb://localhost:27017';


const app =express();

const connect = async ()=>{
    try{
        await mongoose.connect(url , { useNewUrlParser: true });
        console.log("connected to mongoDB")
    }catch(err){
        throw err;
        }
};


mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  
app.use(express.json());
app.use("/api/mogandeen", houtelRoutes);

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
