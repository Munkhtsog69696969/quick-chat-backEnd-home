const {Schema,Types,model}=require("mongoose");

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    // roles: { type: Object, default: {"User": 200} },
    
    isAdmin:{
        type:Boolean,
        required:true,
    }
});

const User=model("users",userSchema);

module.exports=User;