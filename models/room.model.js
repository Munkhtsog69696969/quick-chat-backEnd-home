const {Schema , Types , model}=require("mongoose");

const roomSchema=new Schema({
    name:{
        type:String,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    },

    // Admin:[{Types:ObjectId , ref:"users"}],

})