import asyncHandler from "express-async-handler"
import MessageModel from "../Model/MessageModel.js"


//============================ get all messag

export const gettAllMessage = asyncHandler(async(req,res)=>{
    const allMessage =await MessageModel.find()
    res.status(200).json({status:"Hello",Data:allMessage})
})
//===================create message
export const ReceiveMessage =asyncHandler(async(req,res)=>{
   const {name,email,message,subject} = req.body
    const CreateMessage=await MessageModel.create({name,email,subject,message})
  
    res.status(200).json({status:"Hello",Data:CreateMessage})
})

