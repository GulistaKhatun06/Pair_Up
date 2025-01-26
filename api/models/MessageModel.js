import mongoose from "mongoose";

//sender => type Objectid ref user req
//receiver => type object ref user,
//content => type string ref


const messageSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
},
{timestamps:true}

);

const Message = mongoose.model("Message" , messageSchema);

export default Message;