import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    cartData :{
        type : Object,
        default :{}
    }
}, {minimize:false})
// used minimize here because mongo dont store empty data and to keep cart feature we used minimize false

const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel;