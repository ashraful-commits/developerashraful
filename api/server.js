import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/PageRoutes.js";
import { errorHendler } from "./Middlewares/errorHandler.js";
import MongoDBConncetion from "./Confige/MongoDBConfige.js";
//====================== dotenv config

dotenv.config()

//=======================create port

const port  = 5000 || process.env.PORT

//============================ create app

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("api/public"));
app.use(cors({origin:"http://localhost:5173"}))

app.use("/api/v1/message",router)
app.use(errorHendler)

//=========================== create server

app.listen(port,()=>{
    MongoDBConncetion()
    console.log(`Server is running on port ${port}`.bgGreen)
})