import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    pwd:{type:String},
    cpwd:{type:String},
})

export default mongoose.model.adduserm||mongoose.model('addUserm',userSchema)