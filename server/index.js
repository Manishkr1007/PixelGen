import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const dbUrl = process.env.MONGODB_URL

import connectDB from "./mongodb/connect.js";
import PostRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use("/api/v1/post",PostRoutes);
app.use("/api/v1/dalle",dalleRoutes);

app.get('/',async (req,res)=>{
    res.send("Hello World");
      });


const startServer = async()=>{

     try{
        connectDB(dbUrl);
    app.listen(8081,()=> console.log("Server has started on port http://localhost:8081"))

     }
     catch(error){
        console.log(error)
     }

};
startServer();