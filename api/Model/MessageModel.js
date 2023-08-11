import mongoose from "mongoose"

const messageSchema =mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim:true
    },
    message: {
      type: String,
      
    },
  },
  { timestamps: true }

)


export default mongoose.model("Message",messageSchema)