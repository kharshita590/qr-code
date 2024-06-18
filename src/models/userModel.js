import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "please provide a username"],
        unique:true,

    },
    email:{
        type:String,
        required:[true,"please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please provide a password"]
    },
   

})
const User = mongoose.models.User || mongoose.model
("User",userSchema)

export default User;