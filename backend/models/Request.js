const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

sender:{
type: mongoose.Schema.Types.ObjectId,
ref:"User"
},

receiver:{
type: mongoose.Schema.Types.ObjectId,
ref:"User"
},

skill:{
type:String
},

message:{
type:String
},

status:{
type:String,
default:"pending"
}

},{
timestamps:true
});

module.exports = mongoose.model("Request", requestSchema);