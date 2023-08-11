import mongoose from "mongoose";


const MongoDBConncetion =()=>{
    try {
        mongoose.connect(process.env.MOGOSERVER);
        console.log(`MogoDB connceted Successfully!`.bgGreen)
    } catch (error) {
        console.log(error)
    }
}


export default MongoDBConncetion